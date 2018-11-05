import json


lines = open('genrified.txt', 'r').read().split('\n')
file = open("gentrifiedParsed.js", "a")
print(len(lines))
#lines = str(lines)
i=0
#print(lines[3])
for i in lines:
    print(i)
    lines = lines.replace("´","'")
    file.write('\''+'<div>'+i+'</div>' + '\''+',')







# with open('genrifier.txt') as f:
#     lines = f.readlines()
# file = open("genrifierParsed.js", "a")  


# file.write(c...)