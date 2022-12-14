# Finds stray/unique number in a list - ie. [1,1,2] returns 2
def stray(arr):
    return [num for num in arr if arr.count(num) == 1][0]

# Best Practice
def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x
