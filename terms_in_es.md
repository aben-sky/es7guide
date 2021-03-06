# ES中的术语
- term: 词, 词项.
    > Term: 表示文本中的一个词语,是搜索的最小单元。它有两个元素组成:词语的内容和文本. (见 "Lucene 中 Token 与 Term的区别")
- token: 词元, 词语单元
    > Token: 是一个在分词过程中产生的对象。对于词语“Token ”,对应的Token对象就包含了这个词语的自身内容,在这句话中的开始位置、结束位置一级一个可以存储其他信息的payload对象
- token normalization: 词元归一化, 把词汇单元标准化. 比如: 大小写转换,去掉重音等
- segment: 分段
- phrase: 短语
- phrase matching: 短语匹配
- match_phrase : 短语匹配(查询)
- word stem: 词干
- Recall: 召回率. 返回所有的相关文档
- Precision: 精确率. 不返回无关文档
- stemmed: 词干(已提取)的xx, unstemmed: 非词干(未提取)的xx
- stemmed form: 词干模式, unstemmed foem: 非词干模式
- ?? 广度匹配
- multi query string: 多字符串查询
- cross-fields: 跨字段(查询)
- field-centric: 字段中心式(查询)
- term-centric: 词中心式(查询)
- TF: term frequency, 词频, 一个词在单个文档的某个字段中出现的频率越高，这个文档的相关度就越高。 
- IDF: Inverse document frequency, 逆向文档频率, 一个词在所有文档某个字段索引中出现的频率越高，这个词的相关度就越低。 
- proximity query: 近似
- query family: 查询族
- slop: 混合?? 目标内容需要移动多少次能匹配
- long tail: 长尾
- less-relevant: 次相关的
- bigram phrase: 二元语法短语
- most filds: 多数字段

- unigram: 每一个单词
- bigrams: 单词对. (前缀bi来自拉丁语bis, 意为twice)
- trigrams: 三个单词. (前缀tri来自拉丁语tres或tria, 意为three)
- postings list: 倒排表
- inverted index: 倒排索引
- instant search: 即时搜索
- search-as-you-type: 输入即搜索
- query time: (在)查询时
- edge n-grams: 边界n-grams, 是一种特殊的n-grams
- Completion Suggester: 补全提示
- finite state transducer: 有限状态机
- shingles: 瓦片(词)
- similarity algorithms: 相似算法
- Boolean model: 布尔模型
- vector space model: 向量空间模型
- priactical scoring function: 实用评分函数
- coordination factor: 协调因子
- filed length normalization: 字段长度归一化
## Lucene 的实用评分函数(practical-scoring-function)中的几个因子
- queryNorm: 查询归一(因子). 它试图将查询归一化 ，这样就能将两个不同的查询结果相比较
- coord: 协调因子,可以为那些查询词包含度高的文档提供奖励，文档里出现的查询词越多，它越有机会成为好的匹配结果
- consistently random scoring: 一致随机评分.  (有相同评分的文档随机出现的频率相同, 且单个用户(指定seed参数)在翻页时结果的相对次序始终一致.)
- decay: 衰减值

- Pluggable Similarity Algorithms: 可插拔的相似度算法
- probabilistic relevance model: 概率相关模型
- case folding: 大小写折叠
- unicode-aware: 支持unicode的
- stemmer: 词干提取器
- ingest node: 预处理节点
