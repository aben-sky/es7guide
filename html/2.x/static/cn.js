var esNavLinks = [
    {
        "url": "foreword_id.html", "text": "序言", "title": "序言"
    },
    {
        "url": "preface.html", "text": "前言", "title": "前言",
        "sub": [
            {
                "url": "_who_should_read_this_book.html", "text": "谁应该读这本书", "title": "谁应该读这本书"},
            {"url": "_why_we_wrote_this_book.html", "text": "为什么我们要写这本书", "title": "为什么我们要写这本书"},
            {"url": "_elasticsearch_version.html", "text": "Elasticsearch 版本", "title": "Elasticsearch 版本"},
            {"url": "_how_to_read_this_book.html", "text": "如何读这本书", "title": "如何读这本书"},
            {"url": "_navigating_this_book.html", "text": "本书导航", "title": "本书导航"},
            {"url": "_online_resources.html", "text": "在线资源", "title": "在线资源"},
            {"url": "_conventions_used_in_this_book.html", "text": "本书协议约定", "title": "本书协议约定"},
            {"url": "_using_code_examples.html", "text": "使用代码示例", "title": "使用代码示例"},
            {"url": "_acknowledgments.html", "text": "鸣谢", "title": "鸣谢"}
        ]
    },
    {
        "url": "getting-started.html", "text": "基础入门", "title": "基础入门",
        "sub": [
            {
                "url": "intro.html", "text": "你知道的, 为了搜索…​", "title": "你知道的, 为了搜索…​",
                "sub": [
                    {"url": "running-elasticsearch.html", "text": "安装并运行 Elasticsearch", "title": "安装并运行 Elasticsearch"},
                    {"url": "_talking_to_elasticsearch.html", "text": "和 Elasticsearch 交互", "title": "和 Elasticsearch 交互"},
                    {"url": "_document_oriented.html", "text": "面向文档", "title": "面向文档"},
                    {"url": "_finding_your_feet.html", "text": "适应新环境", "title": "适应新环境"},
                    {"url": "_indexing_employee_documents.html", "text": "索引员工文档", "title": "索引员工文档"},
                    {"url": "_retrieving_a_document.html", "text": "检索文档", "title": "检索文档"},
                    {"url": "_search_lite.html", "text": "轻量搜索", "title": "轻量搜索"},
                    {"url": "_search_with_query_dsl.html", "text": "使用查询表达式搜索", "title": "使用查询表达式搜索"},
                    {"url": "_more_complicated_searches.html", "text": "更复杂的搜索", "title": "更复杂的搜索"},
                    {"url": "_full_text_search.html", "text": "全文搜索", "title": "全文搜索"},
                    {"url": "_phrase_search.html", "text": "短语搜索", "title": "短语搜索"},
                    {"url": "highlighting-intro.html", "text": "高亮搜索", "title": "高亮搜索"},
                    {"url": "_analytics.html", "text": "分析", "title": "分析"},
                    {"url": "_tutorial_conclusion.html", "text": "教程结语", "title": "教程结语"},
                    {"url": "_distributed_nature.html", "text": "分布式特性", "title": "分布式特性"},
                    {"url": "_next_steps.html", "text": "后续步骤", "title": "后续步骤"}
                ]
            },
            {
                "url": "distributed-cluster.html", "text": "分布式集群", "title": "分布式集群",
                "sub": [
                    {"url": "_an-empty-cluster.html", "text": "空集群", "title": "空集群"},
                    {"url": "cluster-health.html", "text": "集群健康", "title": "集群健康"},
                    {"url": "_add-an-index.html", "text": "添加索引", "title": "添加索引"},
                    {"url": "_add_failover.html", "text": "添加故障转移", "title": "添加故障转移"},
                    {"url": "_scale_horizontally.html", "text": "水平扩容", "title": "水平扩容"},
                    {"url": "_coping_with_failure.html", "text": "应对故障", "title": "应对故障"}
                ]
            },
            {
                "url": "data-in-data-out.html", "text": "数据输入和输出", "title": "数据输入和输出",
                "sub": [
                    {"url": "document.html", "text": "什么是文档?", "title": "什么是文档?"},
                    {"url": "_Document_Metadata.html", "text": "文档元数据", "title": "文档元数据"},
                    {"url": "index-doc.html", "text": "索引文档", "title": "索引文档"},
                    {"url": "get-doc.html", "text": "取回一个文档", "title": "取回一个文档"},
                    {"url": "doc-exists.html", "text": "检查文档是否存在", "title": "检查文档是否存在"},
                    {"url": "update-doc.html", "text": "更新整个文档", "title": "更新整个文档"},
                    {"url": "create-doc.html", "text": "创建新文档", "title": "创建新文档"},
                    {"url": "delete-doc.html", "text": "删除文档", "title": "删除文档"},
                    {"url": "version-control.html", "text": "处理冲突", "title": "处理冲突"},
                    {"url": "optimistic-concurrency-control.html", "text": "乐观并发控制", "title": "乐观并发控制"},
                    {"url": "partial-updates.html", "text": "文档的部分更新", "title": "文档的部分更新"},
                    {"url": "_Retrieving_Multiple_Documents.html", "text": "取回多个文档", "title": "取回多个文档"},
                    {"url": "bulk.html", "text": "代价较小的批量操作", "title": "代价较小的批量操作"}
                ]
            },
            {
                "url": "distributed-docs.html", "text": "分布式文档存储", "title": "分布式文档存储",
                "sub": [
                    {"url": "routing-value.html", "text": "路由一个文档到一个分片中", "title": "路由一个文档到一个分片中"},
                    {"url": "how-primary-and-replica-shards-interact.html", "text": "主分片和副本分片如何交互", "title": "主分片和副本分片如何交互"},
                    {"url": "distrib-write.html", "text": "新建、索引和删除文档", "title": "新建、索引和删除文档"},
                    {"url": "distrib-read.html", "text": "取回一个文档", "title": "取回一个文档"},
                    {"url": "_partial_updates_to_a_document.html", "text": "局部更新文档", "title": "局部更新文档"},
                    {"url": "distrib-multi-doc.html", "text": "多文档模式", "title": "多文档模式"}
                ]
            },
            {
                "url": "search.html", "text": "搜索——最基本的工具", "title": "搜索——最基本的工具",
                "sub": [
                    {"url": "empty-search.html", "text": "空搜索", "title": "空搜索"},
                    {"url": "multi-index-multi-type.html", "text": "多索引，多类型", "title": "多索引，多类型"},
                    {"url": "pagination.html", "text": "分页", "title": "分页"},
                    {"url": "search-lite.html", "text": "<em>轻量</em> 搜索", "title": "<em>轻量</em> 搜索"}
                ]
            },
            {
                "url": "mapping-analysis.html", "text": "映射和分析", "title": "映射和分析",
                "sub": [
                    {"url": "_exact_values_versus_full_text.html", "text": "精确值 VS 全文", "title": "精确值 VS 全文"},
                    {"url": "inverted-index.html", "text": "倒排索引", "title": "倒排索引"},
                    {"url": "analysis-intro.html", "text": "分析与分析器", "title": "分析与分析器"},
                    {"url": "mapping-intro.html", "text": "映射", "title": "映射"},
                    {"url": "complex-core-fields.html", "text": "复杂核心域类型", "title": "复杂核心域类型"}
                ]
            },
            {
                "url": "full-body-search.html", "text": "请求体查询", "title": "请求体查询",
                "sub": [
                    {"url": "_empty_search.html", "text": "空查询", "title": "空查询"},
                    {"url": "query-dsl-intro.html", "text": "查询表达式", "title": "查询表达式"},
                    {"url": "_queries_and_filters.html", "text": "查询与过滤", "title": "查询与过滤"},
                    {"url": "_most_important_queries.html", "text": "最重要的查询", "title": "最重要的查询"},
                    {"url": "combining-queries-together.html", "text": "组合多查询", "title": "组合多查询"},
                    {"url": "validating-queries.html", "text": "验证查询", "title": "验证查询"}
                ]
            },
            {
                "url": "sorting.html", "text": "排序与相关性", "title": "排序与相关性",
                "sub": [
                    {"url": "_Sorting.html", "text": "排序", "title": "排序"},
                    {"url": "multi-fields.html", "text": "字符串排序与多字段", "title": "字符串排序与多字段"},
                    {"url": "relevance-intro.html", "text": "什么是相关性?", "title": "什么是相关性?"},
                    {"url": "docvalues-intro.html", "text": "Doc Values 介绍", "title": "Doc Values 介绍"}
                ]
            },
            {
                "url": "distributed-search.html", "text": "执行分布式检索", "title": "执行分布式检索",
                "sub": [
                    {"url": "_query_phase.html", "text": "查询阶段", "title": "查询阶段"},
                    {"url": "_fetch_phase.html", "text": "取回阶段", "title": "取回阶段"},
                    {"url": "_search_options.html", "text": "搜索选项", "title": "搜索选项"},
                    {"url": "scroll.html", "text": "游标查询 <em>Scroll</em>", "title": "游标查询 <em>Scroll</em>"}
                ]
            },
            {
                "url": "index-management.html", "text": "索引管理", "title": "索引管理",
                "sub": [
                    {"url": "_creating_an_index.html", "text": "创建一个索引", "title": "创建一个索引"},
                    {"url": "_deleting_an_index.html", "text": "删除一个索引", "title": "删除一个索引"},
                    {"url": "index-settings.html", "text": "索引设置", "title": "索引设置"},
                    {"url": "configuring-analyzers.html", "text": "配置分析器", "title": "配置分析器"},
                    {"url": "custom-analyzers.html", "text": "自定义分析器", "title": "自定义分析器"},
                    {"url": "mapping.html", "text": "类型和映射", "title": "类型和映射"},
                    {"url": "root-object.html", "text": "根对象", "title": "根对象"},
                    {"url": "dynamic-mapping.html", "text": "动态映射", "title": "动态映射"},
                    {"url": "custom-dynamic-mapping.html", "text": "自定义动态映射", "title": "自定义动态映射"},
                    {"url": "default-mapping.html", "text": "缺省映射", "title": "缺省映射"},
                    {"url": "reindex.html", "text": "重新索引你的数据", "title": "重新索引你的数据"},
                    {"url": "index-aliases.html", "text": "索引别名和零停机", "title": "索引别名和零停机"}
                ]
            },
            {
                "url": "inside-a-shard.html", "text": "分片内部原理", "title": "分片内部原理",
                "sub": [
                    {"url": "making-text-searchable.html", "text": "使文本可被搜索", "title": "使文本可被搜索"},
                    {"url": "dynamic-indices.html", "text": "动态更新索引", "title": "动态更新索引"},
                    {"url": "near-real-time.html", "text": "近实时搜索", "title": "近实时搜索"},
                    {"url": "translog.html", "text": "持久化变更", "title": "持久化变更"},
                    {"url": "merge-process.html", "text": "段合并", "title": "段合并"}
                ]
            }
        ]
    },
    {
        "url": "search-in-depth.html", "text": "深入搜索", "title": "深入搜索",
        "sub": [
            {
                "url": "structured-search.html", "text": "结构化搜索", "title": "结构化搜索",
                "sub": [
                    {"url": "_finding_exact_values.html", "text": "精确值查找", "title": "精确值查找"},
                    {"url": "combining-filters.html", "text": "组合过滤器", "title": "组合过滤器"},
                    {"url": "_finding_multiple_exact_values.html", "text": "查找多个精确值", "title": "查找多个精确值"},
                    {"url": "_ranges.html", "text": "范围", "title": "范围"},
                    {"url": "_dealing_with_null_values.html", "text": "处理 Null 值", "title": "处理 Null 值"},
                    {"url": "filter-caching.html", "text": "关于缓存", "title": "关于缓存"}
                ]
            },
            {
                "url": "full-text-search.html", "text": "全文搜索", "title": "全文搜索",
                "sub": [
                    {"url": "term-vs-full-text.html", "text": "基于词项与基于全文", "title": "基于词项与基于全文"},
                    {"url": "match-query.html", "text": "匹配查询", "title": "匹配查询"},
                    {"url": "match-multi-word.html", "text": "多词查询", "title": "多词查询"},
                    {"url": "bool-query.html", "text": "组合查询", "title": "组合查询"},
                    {"url": "_how_match_uses_bool.html", "text": "如何使用布尔匹配", "title": "如何使用布尔匹配"},
                    {"url": "_boosting_query_clauses.html", "text": "查询语句提升权重", "title": "查询语句提升权重"},
                    {"url": "_controlling_analysis.html", "text": "控制分析", "title": "控制分析"},
                    {"url": "relevance-is-broken.html", "text": "被破坏的相关度！", "title": "被破坏的相关度！"}
                ]
            },
            {
                "url": "multi-field-search.html", "text": "多字段搜索", "title": "多字段搜索",
                "sub": [
                    {"url": "multi-query-strings.html", "text": "多字符串查询", "title": "多字符串查询"},
                    {"url": "_single_query_string.html", "text": "单字符串查询", "title": "单字符串查询"},
                    {"url": "_best_fields.html", "text": "最佳字段", "title": "最佳字段"},
                    {"url": "_tuning_best_fields_queries.html", "text": "最佳字段查询调优", "title": "最佳字段查询调优"},
                    {"url": "multi-match-query.html", "text": "multi_match 查询", "title": "multi_match 查询"},
                    {"url": "most-fields.html", "text": "多数字段", "title": "多数字段"},
                    {"url": "_cross_fields_entity_search.html", "text": "跨字段实体搜索", "title": "跨字段实体搜索"},
                    {"url": "field-centric.html", "text": "字段中心式查询", "title": "字段中心式查询"},
                    {"url": "custom-all.html", "text": "自定义 _all 字段", "title": "自定义 _all 字段"},
                    {"url": "_cross_fields_queries.html", "text": "cross-fields 跨字段查询", "title": "cross-fields 跨字段查询"},
                    {"url": "_exact_value_fields.html", "text": "Exact-Value 精确值字段", "title": "Exact-Value 精确值字段"}
                ]
            },
            {
                "url": "proximity-matching.html", "text": "近似匹配", "title": "近似匹配",
                "sub": [
                    {"url": "phrase-matching.html", "text": "短语匹配", "title": "短语匹配"},
                    {"url": "slop.html", "text": "混合起来", "title": "混合起来"},
                    {"url": "_multivalue_fields_2.html", "text": "多值字段", "title": "多值字段"},
                    {"url": "_closer_is_better.html", "text": "越近越好", "title": "越近越好"},
                    {"url": "proximity-relevance.html", "text": "使用邻近度提高相关度", "title": "使用邻近度提高相关度"},
                    {"url": "_Improving_Performance.html", "text": "性能优化", "title": "性能优化"},
                    {"url": "shingles.html", "text": "寻找相关词", "title": "寻找相关词"}
                ]
            },
            {
                "url": "partial-matching.html", "text": "部分匹配", "title": "部分匹配",
                "sub": [
                    {"url": "_postcodes_and_structured_data.html", "text": "邮编与结构化数据", "title": "邮编与结构化数据"},
                    {"url": "prefix-query.html", "text": "prefix 前缀查询", "title": "prefix 前缀查询"},
                    {"url": "_wildcard_and_regexp_queries.html", "text": "通配符与正则表达式查询", "title": "通配符与正则表达式查询"},
                    {"url": "_query_time_search_as_you_type.html", "text": "查询时输入即搜索", "title": "查询时输入即搜索"},
                    {"url": "_index_time_optimizations.html", "text": "索引时优化", "title": "索引时优化"},
                    {"url": "_ngrams_for_partial_matching.html", "text": "Ngrams 在部分匹配的应用", "title": "Ngrams 在部分匹配的应用"},
                    {"url": "_index_time_search_as_you_type.html", "text": "索引时输入即搜索", "title": "索引时输入即搜索"},
                    {"url": "ngrams-compound-words.html", "text": "Ngrams 在复合词的应用", "title": "Ngrams 在复合词的应用"}
                ]
            },
            {
                "url": "controlling-relevance.html", "text": "控制相关度", "title": "控制相关度",
                "sub": [
                    {"url": "scoring-theory.html", "text": "相关度评分背后的理论", "title": "相关度评分背后的理论"},
                    {"url": "practical-scoring-function.html", "text": "Lucene 的实用评分函数", "title": "Lucene 的实用评分函数"},
                    {"url": "query-time-boosting.html", "text": "查询时权重提升", "title": "查询时权重提升"},
                    {"url": "query-scoring.html", "text": "使用查询结构修改相关度", "title": "使用查询结构修改相关度"},
                    {"url": "not-quite-not.html", "text": "Not Quite Not", "title": "Not Quite Not"},
                    {"url": "ignoring-tfidf.html", "text": "忽略 TF/IDF", "title": "忽略 TF/IDF"},
                    {"url": "function-score-query.html", "text": "function_score 查询", "title": "function_score 查询"},
                    {"url": "boosting-by-popularity.html", "text": "按受欢迎度提升权重", "title": "按受欢迎度提升权重"},
                    {"url": "function-score-filters.html", "text": "过滤集提升权重", "title": "过滤集提升权重"},
                    {"url": "random-scoring.html", "text": "随机评分", "title": "随机评分"},
                    {"url": "decay-functions.html", "text": "越近越好", "title": "越近越好"},
                    {"url": "Understanding-the-price-Clause.html", "text": "理解 price 价格语句", "title": "理解 price 价格语句"},
                    {"url": "script-score.html", "text": "脚本评分", "title": "脚本评分"},
                    {"url": "pluggable-similarites.html", "text": "可插拔的相似度算法", "title": "可插拔的相似度算法"},
                    {"url": "changing-similarities.html", "text": "更改相似度", "title": "更改相似度"},
                    {"url": "relevance-conclusion.html", "text": "调试相关度是最后 10% 要做的事情", "title": "调试相关度是最后 10% 要做的事情"}
                ]
            }
        ]
    },
    {
        "url": "languages.html", "text": "处理人类语言", "title": "处理人类语言",
        "sub": [
            {
                "url": "language-intro.html", "text": "开始处理各种语言", "title": "开始处理各种语言",
                "sub": [
                    {"url": "using-language-analyzers.html", "text": "使用语言分析器", "title": "使用语言分析器"},
                    {"url": "configuring-language-analyzers.html", "text": "配置语言分析器", "title": "配置语言分析器"},
                    {"url": "language-pitfalls.html", "text": "混合语言的陷阱", "title": "混合语言的陷阱"},
                    {"url": "one-lang-docs.html", "text": "每份文档一种语言", "title": "每份文档一种语言"},
                    {"url": "one-lang-fields.html", "text": "每个域一种语言", "title": "每个域一种语言"},
                    {"url": "mixed-lang-fields.html", "text": "混合语言域", "title": "混合语言域"}
                ]
            },
            {
                "url": "identifying-words.html", "text": "词汇识别", "title": "词汇识别",
                "sub": [
                    {"url": "standard-analyzer.html", "text": "标准分析器", "title": "标准分析器"},
                    {"url": "standard-tokenizer.html", "text": "标准分词器", "title": "标准分词器"},
                    {"url": "icu-plugin.html", "text": "安装 ICU 插件", "title": "安装 ICU 插件"},
                    {"url": "icu-tokenizer.html", "text": "icu_分词器", "title": "icu_分词器"},
                    {"url": "char-filters.html", "text": "整理输入文本", "title": "整理输入文本"}
                ]
            },
            {
                "url": "token-normalization.html", "text": "归一化词元", "title": "归一化词元",
                "sub": [
                    {"url": "lowercase-token-filter.html", "text": "举个例子", "title": "举个例子"},
                    {"url": "asciifolding-token-filter.html", "text": "如果有口音", "title": "如果有口音"},
                    {"url": "unicode-normalization.html", "text": "Unicode的世界", "title": "Unicode的世界"},
                    {"url": "case-folding.html", "text": "Unicode 大小写折叠", "title": "Unicode 大小写折叠"},
                    {"url": "character-folding.html", "text": "Unicode 字符折叠", "title": "Unicode 字符折叠"},
                    {"url": "sorting-collations.html", "text": "排序和整理", "title": "排序和整理"}
                ]
            },
            {
                "url": "stemming.html", "text": "将单词还原为词根", "title": "将单词还原为词根",
                "sub": [
                    {"url": "algorithmic-stemmers.html", "text": "词干提取算法", "title": "词干提取算法"},
                    {"url": "dictionary-stemmers.html", "text": "字典词干提取器", "title": "字典词干提取器"},
                    {"url": "hunspell.html", "text": "Hunspell 词干提取器", "title": "Hunspell 词干提取器"},
                    {"url": "choosing-a-stemmer.html", "text": "选择一个词干提取器", "title": "选择一个词干提取器"},
                    {"url": "controlling-stemming.html", "text": "控制词干提取", "title": "控制词干提取"},
                    {"url": "stemming-in-situ.html", "text": "原形词干提取", "title": "原形词干提取"}
                ]
            },
            {
                "url": "stopwords.html", "text": "停用词: 性能与精度", "title": "停用词: 性能与精度",
                "sub": [
                    {"url": "pros-cons-stopwords.html", "text": "停用词的优缺点", "title": "停用词的优缺点"},
                    {"url": "using-stopwords.html", "text": "使用停用词", "title": "使用停用词"},
                    {"url": "stopwords-performance.html", "text": "停用词与性能", "title": "停用词与性能"},
                    {"url": "common-terms.html", "text": "高低频词: 分而治之", "title": "原翻译: 词项的分别管理"},
                    {"url": "stopwords-phrases.html", "text": "停用词与短语查询", "title": "停用词与短语查询"},
                    {"url": "common-grams.html", "text": "common_grams 过滤器", "title": "common_grams 过滤器"},
                    {"url": "stopwords-relavance.html", "text": "停用词与相关性", "title": "停用词与相关性"}
                ]
            },
            {
                "url": "synonyms.html", "text": "同义词", "title": "同义词",
                "sub": [
                    {"url": "using-synonyms.html", "text": "使用同义词", "title": "使用同义词"},
                    {"url": "synonym-formats.html", "text": "同义词格式", "title": "同义词格式"},
                    {"url": "synonyms-expand-or-contract.html", "text": "扩展或收缩", "title": "扩展或收缩"},
                    {"url": "synonyms-analysis-chain.html", "text": "同义词和分析链", "title": "同义词和分析链"},
                    {"url": "multi-word-synonyms.html", "text": "多词同义词和短语查询", "title": "多词同义词和短语查询"},
                    {"url": "symbol-synonyms.html", "text": "符号同义词", "title": "符号同义词"}
                ]
            },
            {
                "url": "fuzzy-matching.html", "text": "拼写错误", "title": "拼写错误",
                "sub": [
                    {"url": "fuzziness.html", "text": "模糊性", "title": "模糊性"},
                    {"url": "fuzzy-query.html", "text": "模糊查询", "title": "模糊查询"},
                    {"url": "fuzzy-match-query.html", "text": "模糊匹配查询", "title": "模糊匹配查询"},
                    {"url": "fuzzy-scoring.html", "text": "模糊性评分", "title": "模糊性评分"},
                    {"url": "phonetic-matching.html", "text": "语音匹配", "title": "语音匹配"}
                ]
            }
        ]
    },
    {
        "url": "aggregations.html", "text": "聚合", "title": "聚合",
        "sub": [
            {
                "url": "aggs-high-level.html", "text": "高阶概念", "title": "高阶概念",
                "sub": [
                    {"url": "_buckets.html", "text": "桶", "title": "桶"},
                    {"url": "_metrics.html", "text": "指标", "title": "指标"},
                    {"url": "_combining_the_two.html", "text": "桶和指标的组合", "title": "桶和指标的组合"}
                ]
            },
            {
                "url": "_aggregation_test_drive.html", "text": "尝试聚合", "title": "尝试聚合",
                "sub": [
                    {"url": "_adding_a_metric_to_the_mix.html", "text": "添加度量指标", "title": "添加度量指标"},
                    {"url": "_buckets_inside_buckets.html", "text": "嵌套桶", "title": "嵌套桶"},
                    {"url": "_one_final_modification.html", "text": "最后的修改", "title": "最后的修改"}
                ]
            },
            {
                "url": "_building_bar_charts.html", "text": "条形图", "title": "条形图"},
            {
                "url": "_looking_at_time.html", "text": "按时间统计", "title": "按时间统计",
                "sub": [
                    {"url": "_returning_empty_buckets.html", "text": "返回空 Buckets", "title": "返回空 Buckets"},
                    {"url": "_extended_example.html", "text": "扩展例子", "title": "扩展例子"},
                    {"url": "_the_sky_8217_s_the_limit.html", "text": "潜力无穷", "title": "潜力无穷"}
                ]
            },
            {
                "url": "_scoping_aggregations.html", "text": "范围限定的聚合", "title": "范围限定的聚合"},
            {
                "url": "_filtering_queries_and_aggregations.html", "text": "过滤和聚合", "title": "过滤和聚合",
                "sub": [
                    {"url": "_filtering_queries.html", "text": "过滤", "title": "过滤"},
                    {"url": "_filter_bucket.html", "text": "过滤桶", "title": "过滤桶"},
                    {"url": "_post_filter.html", "text": "后过滤器", "title": "后过滤器"},
                    {"url": "_recap.html", "text": "小结", "title": "小结"}
                ]
            },
            {
                "url": "_sorting_multivalue_buckets.html", "text": "多桶排序", "title": "多桶排序",
                "sub": [
                    {"url": "_intrinsic_sorts.html", "text": "内置排序", "title": "内置排序"},
                    {"url": "_sorting_by_a_metric.html", "text": "按度量排序", "title": "按度量排序"},
                    {"url": "_sorting_based_on_deep_metrics.html", "text": "基于“深度”度量排序", "title": "基于“深度”度量排序"}
                ]
            },
            {
                "url": "_approximate_aggregations.html", "text": "近似聚合", "title": "近似聚合",
                "sub": [
                    {"url": "cardinality.html", "text": "统计去重后的数量", "title": "统计去重后的数量"},
                    {"url": "percentiles.html", "text": "百分位计算", "title": "百分位计算"}
                ]
            },
            {
                "url": "significant-terms.html", "text": "通过聚合发现异常指标", "title": "通过聚合发现异常指标",
                "sub": [
                    {"url": "_significant_terms_demo.html", "text": "significant_terms 演示", "title": "significant_terms 演示"}
                ]
            },
            {
                "url": "docvalues-and-fielddata.html", "text": "Doc Values and Fielddata", "title": "Doc Values and Fielddata",
                "sub": [
                    {"url": "docvalues.html", "text": "Doc Values", "title": "Doc Values"},
                    {"url": "_deep_dive_on_doc_values.html", "text": "深入理解 Doc Values", "title": "深入理解 Doc Values"},
                    {"url": "aggregations-and-analysis.html", "text": "聚合与分析", "title": "聚合与分析"},
                    {"url": "_limiting_memory_usage.html", "text": "限制内存使用", "title": "限制内存使用"},
                    {"url": "_fielddata_filtering.html", "text": "Fielddata 的过滤", "title": "Fielddata 的过滤"},
                    {"url": "preload-fielddata.html", "text": "预加载 fielddata", "title": "预加载 fielddata"},
                    {"url": "_preventing_combinatorial_explosions.html", "text": "优化聚合查询", "title": "优化聚合查询"}
                ]
            },
            {
                "url": "_closing_thoughts.html", "text": "总结", "title": "总结"}
        ]
    },
    {
        "url": "geoloc.html", "text": "地理位置", "title": "地理位置",
        "sub": [
            {
                "url": "geopoints.html", "text": "地理坐标点", "title": "地理坐标点",
                "sub": [
                    {"url": "lat-lon-formats.html", "text": "经纬度坐标格式", "title": "经纬度坐标格式"},
                    {"url": "filter-by-geopoint.html", "text": "通过地理坐标点过滤", "title": "通过地理坐标点过滤"},
                    {"url": "geo-bounding-box.html", "text": "地理坐标盒模型过滤器", "title": "地理坐标盒模型过滤器"},
                    {"url": "geo-distance.html", "text": "地理距离过滤器", "title": "地理距离过滤器"},
                    {"url": "sorting-by-distance.html", "text": "按距离排序", "title": "按距离排序"}
                ]
            },
            {
                "url": "geohashes.html", "text": "Geohashes", "title": "Geohashes",
                "sub": [
                    {"url": "geohash-mapping.html", "text": "Geohashes 映射", "title": "Geohashes 映射"},
                    {"url": "geohash-cell-query.html", "text": "Geohash 单元查询", "title": "Geohash 单元查询"}
                ]
            },
            {
                "url": "geo-aggs.html", "text": "地理位置聚合", "title": "地理位置聚合",
                "sub": [
                    {"url": "geo-distance-agg.html", "text": "地理距离聚合", "title": "地理距离聚合"},
                    {"url": "geohash-grid-agg.html", "text": "Geohash 网格聚合", "title": "Geohash 网格聚合"},
                    {"url": "geo-bounds-agg.html", "text": "地理边界聚合", "title": "地理边界聚合"}
                ]
            },
            {
                "url": "geo-shapes.html", "text": "地理形状", "title": "地理形状",
                "sub": [
                    {"url": "mapping-geo-shapes.html", "text": "映射地理形状", "title": "映射地理形状"},
                    {"url": "indexing-geo-shapes.html", "text": "索引地理形状", "title": "索引地理形状"},
                    {"url": "querying-geo-shapes.html", "text": "查询地理形状", "title": "查询地理形状"},
                    {"url": "indexed-geo-shapes.html", "text": "在查询中使用已索引的形状", "title": "在查询中使用已索引的形状"}
                ]
            }
        ]
    },
    {
        "url": "modeling-your-data.html", "text": "数据建模", "title": "数据建模",
        "sub": [
            {
                "url": "relations.html", "text": "关联关系处理", "title": "关联关系处理",
                "sub": [
                    {"url": "application-joins.html", "text": "应用层联接", "title": "应用层联接"},
                    {"url": "denormalization.html", "text": "去规范化你的数据", "title": "去规范化你的数据"},
                    {"url": "top-hits.html", "text": "字段折叠", "title": "字段折叠"},
                    {"url": "denormalization-concurrency.html", "text": "去规范化和并发", "title": "去规范化和并发"},
                    {"url": "concurrency-solutions.html", "text": "解决并发问题", "title": "解决并发问题"}
                ]
            },
            {
                "url": "nested-objects.html", "text": "嵌套对象", "title": "嵌套对象",
                "sub": [
                    {"url": "nested-mapping.html", "text": "嵌套对象映射", "title": "嵌套对象映射"},
                    {"url": "nested-query.html", "text": "嵌套对象查询", "title": "嵌套对象查询"},
                    {"url": "nested-sorting.html", "text": "使用嵌套字段排序", "title": "使用嵌套字段排序"},
                    {"url": "nested-aggregation.html", "text": "嵌套聚合", "title": "嵌套聚合"}
                ]
            },
            {
                "url": "parent-child.html", "text": "父-子关系文档", "title": "父-子关系文档",
                "sub": [
                    {"url": "parent-child-mapping.html", "text": "父-子关系文档映射", "title": "父-子关系文档映射"},
                    {"url": "indexing-parent-child.html", "text": "构建父-子文档索引", "title": "构建父-子文档索引"},
                    {"url": "has-child.html", "text": "通过子文档查询父文档", "title": "通过子文档查询父文档"},
                    {"url": "has-parent.html", "text": "通过父文档查询子文档", "title": "通过父文档查询子文档"},
                    {"url": "children-agg.html", "text": "子文档聚合", "title": "子文档聚合"},
                    {"url": "grandparents.html", "text": "祖辈与孙辈关系", "title": "祖辈与孙辈关系"},
                    {"url": "parent-child-performance.html", "text": "实际使用中的一些建议", "title": "实际使用中的一些建议"}
                ]
            },
            {
                "url": "scale.html", "text": "扩容设计", "title": "扩容设计",
                "sub": [
                    {"url": "shard-scale.html", "text": "扩容的单元", "title": "扩容的单元"},
                    {"url": "overallocation.html", "text": "分片预分配", "title": "分片预分配"},
                    {"url": "kagillion-shards.html", "text": "海量分片", "title": "海量分片"},
                    {"url": "capacity-planning.html", "text": "容量规划", "title": "容量规划"},
                    {"url": "replica-shards.html", "text": "副本分片", "title": "副本分片"},
                    {"url": "multiple-indices.html", "text": "多索引", "title": "多索引"},
                    {"url": "time-based.html", "text": "基于时间的数据", "title": "基于时间的数据"},
                    {"url": "index-templates.html", "text": "索引模板", "title": "索引模板"},
                    {"url": "retiring-data.html", "text": "数据过期", "title": "数据过期"},
                    {"url": "user-based.html", "text": "基于用户的数据", "title": "基于用户的数据"},
                    {"url": "shared-index.html", "text": "共享索引", "title": "共享索引"},
                    {"url": "faking-it.html", "text": "利用别名实现一个用户一个索引", "title": "利用别名实现一个用户一个索引"},
                    {"url": "one-big-user.html", "text": "一个大的用户", "title": "一个大的用户"},
                    {"url": "finite-scale.html", "text": "扩容并不是无限的", "title": "扩容并不是无限的"}
                ]
            }
        ]
    },
    {
        "url": "administration.html", "text": "管理、监控和部署", "title": "管理、监控和部署",
        "sub": [
            {
                "url": "cluster-admin.html", "text": "监控", "title": "监控",
                "sub": [
                    {"url": "marvel.html", "text": "Marvel 监控", "title": "Marvel 监控"},
                    {"url": "_cluster_health.html", "text": "集群健康", "title": "集群健康"},
                    {"url": "_monitoring_individual_nodes.html", "text": "监控单个节点", "title": "监控单个节点"},
                    {"url": "_cluster_stats.html", "text": "集群统计", "title": "集群统计"},
                    {"url": "_index_stats.html", "text": "索引统计", "title": "索引统计"},
                    {"url": "_pending_tasks.html", "text": "等待中的任务", "title": "等待中的任务"},
                    {"url": "_cat_api.html", "text": "cat API", "title": "cat API"}
                ]
            },
            {
                "url": "deploy.html", "text": "部署", "title": "部署",
                "sub": [
                    {"url": "hardware.html", "text": "硬件", "title": "硬件"},
                    {"url": "_java_virtual_machine.html", "text": "Java 虚拟机", "title": "Java 虚拟机"},
                    {"url": "_transport_client_versus_node_client.html", "text": "Transport Client 与 Node Client", "title": "Transport Client 与 Node Client"},
                    {"url": "_configuration_management.html", "text": "配置管理", "title": "配置管理"},
                    {"url": "important-configuration-changes.html", "text": "重要配置的修改", "title": "重要配置的修改"},
                    {"url": "dont-touch-these-settings.html", "text": "不要触碰这些配置！", "title": "不要触碰这些配置！"},
                    {"url": "heap-sizing.html", "text": "堆内存:大小和交换", "title": "堆内存:大小和交换"},
                    {"url": "_file_descriptors_and_mmap.html", "text": "文件描述符和 MMap", "title": "文件描述符和 MMap"},
                    {"url": "_revisit_this_list_before_production.html", "text": "在生产之前，重温这个列表", "title": "在生产之前，重温这个列表"}
                ]
            },
            {
                "url": "post_deploy.html", "text": "部署后", "title": "部署后",
                "sub": [
                    {"url": "_changing_settings_dynamically.html", "text": "动态变更设置", "title": "动态变更设置"},
                    {"url": "logging.html", "text": "日志记录", "title": "日志记录"},
                    {"url": "indexing-performance.html", "text": "索引性能技巧", "title": "索引性能技巧"},
                    {"url": "_delaying_shard_allocation.html", "text": "推迟分片分配", "title": "推迟分片分配"},
                    {"url": "_rolling_restarts.html", "text": "滚动重启", "title": "滚动重启"},
                    {"url": "backing-up-your-cluster.html", "text": "备份你的集群", "title": "备份你的集群"},
                    {"url": "_restoring_from_a_snapshot.html", "text": "从快照恢复", "title": "从快照恢复"},
                    {"url": "_clusters_are_living_breathing_creatures.html", "text": "集群是活着的、呼吸着的生命", "title": "集群是活着的、呼吸着的生命"}
                ]
            }
        ]
    }
];

function renderRightDocList(filename) {
    //region docList
    var strDocList = '<div class="toc">' +
        '<ul class="toc">';
    //中间的html替换成json格式渲染出来
    strDocList += tep_esRenderNavList(esNavLinks) +
        '</ul>\n' +
        '</div>';
    //endregion

    var url = window.location.href;
    var ix = url.lastIndexOf('/');
    var filename = url.substr(ix + 1, url.length - ix).toLowerCase();

    if (filename == 'index.html') {
        //注意: id=content的有2个, 上面还有一个section!
        document.querySelector('div#content').innerHTML = strDocList;
    }else{
        var rightCol = document.querySelector('#right_col');
        rightCol.innerHTML = strDocList;
    }

    //绑定
    document.querySelectorAll('.toc li.collapsible').forEach(function (item) {
        item.addEventListener('click', function (event) {
            var className = item.getAttribute('class');
            if (className.indexOf('show') > -1) {
                //移除 show
                className = className.replace(' show', '');
            } else {
                //添加 show
                className += ' show';
            }
            item.setAttribute('class', className);
            event.stopPropagation();
        });
    });

    //高亮
    var objList = document.querySelectorAll('#right_col a');
    objList.forEach(function (item) { //不要用"for(var i in objList){ objList[i]}", 否则会出意外的
        if (item.getAttribute('href').toLowerCase() == filename) {
            //当前加粗
            item.setAttribute('class', 'current_page');

            //上一层级菜单的li
            var parentLevelLi = item.parentElement.parentElement.parentElement.parentElement;
            if (parentLevelLi.nodeName == 'LI') {
                var className = parentLevelLi.getAttribute('class') + ' show';
                parentLevelLi.setAttribute('class', className);

                //上上一层级菜单的li
                var parentLevel2Li = parentLevelLi.parentElement.parentElement;
                if (parentLevel2Li.nodeName == 'LI') {
                    var className = parentLevel2Li.getAttribute('class') + ' show';
                    parentLevel2Li.setAttribute('class', className);
                }
            }

            //展开当前层级
            if (item.parentElement.nextSibling
                && item.parentElement.nextSibling.nodeName == 'UL'
            ) {
                var currentLevelLi = item.parentElement.parentElement;
                var className = currentLevelLi.getAttribute('class') + ' show';
                currentLevelLi.setAttribute('class', className);
            }
        }
    });

}

//渲染菜单
function tep_esRenderNavList(data) {
    //最多就是三级循环
    var rt = '';
    for (var item in data) {
        var row = data[item];
        if (row.hasOwnProperty('sub')) {
            rt += '<li class="collapsible">';
        } else {
            rt += '<li>';
        }
        rt += '<span>';
        rt += '<a href="' + row.url + '"';
        if (row.hasOwnProperty('title')) {
            rt += ' title="' + row.title + '"';
        }
        rt += '>' + row.text;
        rt += '</a>';
        rt += '</span>';
        if (row.hasOwnProperty('sub')) {
            rt += '\n<ul>';
            rt += tep_esRenderNavList(row.sub);
            rt += '</ul>\n';
        }
        rt += '</li>\n';
    }
    return rt;
}

//把en版本的地址替换成本地地址
function tep_replace_en_url() {
    var objs = document.getElementsByTagName('a');
    var pre = 'https://www.elastic.co/guide/en/elasticsearch/guide/current/';
    var len = pre.length;
    for (var i = 0, n = objs.length; i < n; i++) {
        var obj = objs[i];
        if(!obj.hasAttribute('href')){
            continue;
        }
        var href = obj.getAttribute('href');
        if(href.length > len && href.substr(0, len) == pre){
            var href2 = '../en/' + href.substr(len, href.length - len);
            obj.setAttribute('href',  href2);
            obj.innerHTML = href2;
            obj.setAttribute('target', '_blank');
        }
    }
}
tep_replace_en_url();

renderRightDocList();

