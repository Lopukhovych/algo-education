class WordDictionary:

    def __init__(self):
        self.dict = {}

    def addWord(self, word: str) -> None:
        save_dict = self.dict
        for w in word:
            if w not in save_dict:
                save_dict[w] = {}
            save_dict = save_dict[w]
        print(self.dict)


    def search(self, word: str) -> bool:
        used_dots = 0

        def dfs(search_dict, index):
            nonlocal used_dots, word

            if index == len(word):
                return True
            ch = word[index]

            if ch != '.' and ch not in search_dict:
                return False
            if ch == '.' and used_dots == 2:
                return False

            if ch != '.':
                return dfs(search_dict[ch], index + 1)
            else:
                used_dots += 1
                return any([dfs(search_dict[x], index + 1) for x in search_dict])

        return dfs(self.dict, 0)




# Your WordDictionary object will be instantiated and called as such:
obj = WordDictionary()
obj.addWord('at')
obj.addWord('and')
obj.addWord('an')
obj.addWord('add')
print(obj.search('a')) # False
print(obj.search('.at')) # false
obj.addWord('add')
print(obj.search('.at'))
