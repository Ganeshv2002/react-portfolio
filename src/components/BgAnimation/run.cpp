#include <iostream>
#include <fstream>
#include <vector>
#include <sstream>
#include <algorithm>

struct Item {
    std::string name;
    int weight;
    int worth;
};

bool sortByRatio(const Item& a, const Item& b) {
    return (static_cast<double>(a.worth) / a.weight) > (static_cast<double>(b.worth) / b.weight);
}

void knapsack(std::vector<Item>& items, int limit) {
    std::sort(items.begin(), items.end(), sortByRatio);

    std::vector<std::vector<int>> dp(items.size() + 1, std::vector<int>(limit + 1, 0));

    for (int i = 1; i <= items.size(); ++i) {
        for (int w = 1; w <= limit; ++w) {
            if (items[i - 1].weight <= w) {
                dp[i][w] = std::max(dp[i - 1][w], dp[i - 1][w - items[i - 1].weight] + items[i - 1].worth);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    int w = limit;
    int totalWorth = dp[items.size()][limit];
    std::vector<Item> selectedItems;

    for (int i = items.size(); i > 0 && totalWorth > 0; --i) {
        if (totalWorth != dp[i - 1][w]) {
            selectedItems.push_back(items[i - 1]);
            totalWorth -= items[i - 1].worth;
            w -= items[i - 1].weight;
        }
    }

    std::cout << "Selected Items:\n";
    for (const Item& item : selectedItems) {
        std::cout << "Name: " << item.name << ", Weight: " << item.weight << ", Worth: " << item.worth << "\n";
    }
}

int main() {
    std::ifstream file("items.csv");
    std::vector<Item> items;
    std::string line;

    while (std::getline(file, line)) {
        std::stringstream ss(line);
        std::string token;
        Item item;

        std::getline(ss, token, ',');
        item.name = token;

        std::getline(ss, token, ',');
        item.weight = std::stoi(token);

        std::getline(ss, token, ',');
        item.worth = std::stoi(token);

        items.push_back(item);
    }

    int cabinBaggageLimit = 7000;
    knapsack(items, cabinBaggageLimit);

    return 0;
}
