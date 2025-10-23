#include <iostream>
#include <vector>

using namespace std;

void bubbleSort(vector<int> &arr)
{
  for (size_t i = 0; i < arr.size() - 1; i++)
  {
    for (size_t j = 0; j < arr.size() - i - 1; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        swap(arr[j], arr[j + 1]);
      }
    }
  }
}