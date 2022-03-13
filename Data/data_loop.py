
n = 1

print("[", end="")
for i in range(1922, 2023, 10): 
   
    print(i, end="")
    print("%02d" % (n,), end="")
    print("%02d" % (n,), end="")
    print(", ", end="")

# I did it this way so I don't have to deal with arrays. Just delete the last comma at the end. 

arr = []
for i in range(10):
    arr.append("null")
print(arr)