def bubble_sort(arr)
  n = arr.length
  n.times do
    (n - 1).times do |i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
      end
    end
  end
  arr
end