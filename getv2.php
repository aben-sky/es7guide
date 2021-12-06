<?php

//从官网抓取v2的文档, 处理后放入本地

require_once 'vendor/autoload.php';

use QL\QueryList;

function tepGetDocList() {
    //所有文档列表
    $docList = <<<EOF
<div class="toc">
<ul class="toc">
<li><span class="preface"><a href="foreword_id.html">序言</a></span>
</li>
<li class="collapsible"><span class="chapter"><a href="preface.html">前言</a></span>
<ul>
<li><span class="section"><a href="_who_should_read_this_book.html">谁应该读这本书</a></span>
</li>
<li><span class="section"><a href="_why_we_wrote_this_book.html">为什么我们要写这本书</a></span>
</li>
<li><span class="section"><a href="_elasticsearch_version.html">Elasticsearch 版本</a></span>
</li>
<li><span class="section"><a href="_how_to_read_this_book.html">如何读这本书</a></span>
</li>
<li><span class="section"><a href="_navigating_this_book.html">本书导航</a></span>
</li>
<li><span class="section"><a href="_online_resources.html">在线资源</a></span>
</li>
<li><span class="section"><a href="_conventions_used_in_this_book.html">本书协议约定</a></span>
</li>
<li><span class="section"><a href="_using_code_examples.html">使用代码示例</a></span>
</li>
<li><span class="section"><a href="_acknowledgments.html">鸣谢</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="getting-started.html">基础入门</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="intro.html">你知道的, 为了搜索…​</a></span>
<ul>
<li><span class="section"><a href="running-elasticsearch.html">安装并运行 Elasticsearch</a></span>
</li>
<li><span class="section"><a href="_talking_to_elasticsearch.html">和 Elasticsearch 交互</a></span>
</li>
<li><span class="section"><a href="_document_oriented.html">面向文档</a></span>
</li>
<li><span class="section"><a href="_finding_your_feet.html">适应新环境</a></span>
</li>
<li><span class="section"><a href="_indexing_employee_documents.html">索引员工文档</a></span>
</li>
<li><span class="section"><a href="_retrieving_a_document.html">检索文档</a></span>
</li>
<li><span class="section"><a href="_search_lite.html">轻量搜索</a></span>
</li>
<li><span class="section"><a href="_search_with_query_dsl.html">使用查询表达式搜索</a></span>
</li>
<li><span class="section"><a href="_more_complicated_searches.html">更复杂的搜索</a></span>
</li>
<li><span class="section"><a href="_full_text_search.html">全文搜索</a></span>
</li>
<li><span class="section"><a href="_phrase_search.html">短语搜索</a></span>
</li>
<li><span class="section"><a href="highlighting-intro.html">高亮搜索</a></span>
</li>
<li><span class="section"><a href="_analytics.html">分析</a></span>
</li>
<li><span class="section"><a href="_tutorial_conclusion.html">教程结语</a></span>
</li>
<li><span class="section"><a href="_distributed_nature.html">分布式特性</a></span>
</li>
<li><span class="section"><a href="_next_steps.html">后续步骤</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="distributed-cluster.html">集群内的原理</a></span>
<ul>
<li><span class="section"><a href="_an-empty-cluster.html">空集群</a></span>
</li>
<li><span class="section"><a href="cluster-health.html">集群健康</a></span>
</li>
<li><span class="section"><a href="_add-an-index.html">添加索引</a></span>
</li>
<li><span class="section"><a href="_add_failover.html">添加故障转移</a></span>
</li>
<li><span class="section"><a href="_scale_horizontally.html">水平扩容</a></span>
</li>
<li><span class="section"><a href="_coping_with_failure.html">应对故障</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="data-in-data-out.html">数据输入和输出</a></span>
<ul>
<li><span class="section"><a href="document.html">什么是文档?</a></span>
</li>
<li><span class="section"><a href="_Document_Metadata.html">文档元数据</a></span>
</li>
<li><span class="section"><a href="index-doc.html">索引文档</a></span>
</li>
<li><span class="section"><a href="get-doc.html">取回一个文档</a></span>
</li>
<li><span class="section"><a href="doc-exists.html">检查文档是否存在</a></span>
</li>
<li><span class="section"><a href="update-doc.html">更新整个文档</a></span>
</li>
<li><span class="section"><a href="create-doc.html">创建新文档</a></span>
</li>
<li><span class="section"><a href="delete-doc.html">删除文档</a></span>
</li>
<li><span class="section"><a href="version-control.html">处理冲突</a></span>
</li>
<li><span class="section"><a href="optimistic-concurrency-control.html">乐观并发控制</a></span>
</li>
<li><span class="section"><a href="partial-updates.html">文档的部分更新</a></span>
</li>
<li><span class="section"><a href="_Retrieving_Multiple_Documents.html">取回多个文档</a></span>
</li>
<li><span class="section"><a href="bulk.html">代价较小的批量操作</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="distributed-docs.html">分布式文档存储</a></span>
<ul>
<li><span class="section"><a href="routing-value.html">路由一个文档到一个分片中</a></span>
</li>
<li><span class="section"><a href="how-primary-and-replica-shards-interact.html">主分片和副本分片如何交互</a></span>
</li>
<li><span class="section"><a href="distrib-write.html">新建、索引和删除文档</a></span>
</li>
<li><span class="section"><a href="distrib-read.html">取回一个文档</a></span>
</li>
<li><span class="section"><a href="_partial_updates_to_a_document.html">局部更新文档</a></span>
</li>
<li><span class="section"><a href="distrib-multi-doc.html">多文档模式</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="search.html">搜索——最基本的工具</a></span>
<ul>
<li><span class="section"><a href="empty-search.html">空搜索</a></span>
</li>
<li><span class="section"><a href="multi-index-multi-type.html">多索引，多类型</a></span>
</li>
<li><span class="section"><a href="pagination.html">分页</a></span>
</li>
<li><span class="section"><a href="search-lite.html"><em>轻量</em> 搜索</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="mapping-analysis.html">映射和分析</a></span>
<ul>
<li><span class="section"><a href="_exact_values_versus_full_text.html">精确值 VS 全文</a></span>
</li>
<li><span class="section"><a href="inverted-index.html">倒排索引</a></span>
</li>
<li><span class="section"><a href="analysis-intro.html">分析与分析器</a></span>
</li>
<li><span class="section"><a href="mapping-intro.html">映射</a></span>
</li>
<li><span class="section"><a href="complex-core-fields.html">复杂核心域类型</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="full-body-search.html">请求体查询</a></span>
<ul>
<li><span class="section"><a href="_empty_search.html">空查询</a></span>
</li>
<li><span class="section"><a href="query-dsl-intro.html">查询表达式</a></span>
</li>
<li><span class="section"><a href="_queries_and_filters.html">查询与过滤</a></span>
</li>
<li><span class="section"><a href="_most_important_queries.html">最重要的查询</a></span>
</li>
<li><span class="section"><a href="combining-queries-together.html">组合多查询</a></span>
</li>
<li><span class="section"><a href="validating-queries.html">验证查询</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="sorting.html">排序与相关性</a></span>
<ul>
<li><span class="section"><a href="_Sorting.html">排序</a></span>
</li>
<li><span class="section"><a href="multi-fields.html">字符串排序与多字段</a></span>
</li>
<li><span class="section"><a href="relevance-intro.html">什么是相关性?</a></span>
</li>
<li><span class="section"><a href="docvalues-intro.html">Doc Values 介绍</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="distributed-search.html">执行分布式检索</a></span>
<ul>
<li><span class="section"><a href="_query_phase.html">查询阶段</a></span>
</li>
<li><span class="section"><a href="_fetch_phase.html">取回阶段</a></span>
</li>
<li><span class="section"><a href="_search_options.html">搜索选项</a></span>
</li>
<li><span class="section"><a href="scroll.html">游标查询 <em>Scroll</em></a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="index-management.html">索引管理</a></span>
<ul>
<li><span class="section"><a href="_creating_an_index.html">创建一个索引</a></span>
</li>
<li><span class="section"><a href="_deleting_an_index.html">删除一个索引</a></span>
</li>
<li><span class="section"><a href="index-settings.html">索引设置</a></span>
</li>
<li><span class="section"><a href="configuring-analyzers.html">配置分析器</a></span>
</li>
<li><span class="section"><a href="custom-analyzers.html">自定义分析器</a></span>
</li>
<li><span class="section"><a href="mapping.html">类型和映射</a></span>
</li>
<li><span class="section"><a href="root-object.html">根对象</a></span>
</li>
<li><span class="section"><a href="dynamic-mapping.html">动态映射</a></span>
</li>
<li><span class="section"><a href="custom-dynamic-mapping.html">自定义动态映射</a></span>
</li>
<li><span class="section"><a href="default-mapping.html">缺省映射</a></span>
</li>
<li><span class="section"><a href="reindex.html">重新索引你的数据</a></span>
</li>
<li><span class="section"><a href="index-aliases.html">索引别名和零停机</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="inside-a-shard.html">分片内部原理</a></span>
<ul>
<li><span class="section"><a href="making-text-searchable.html">使文本可被搜索</a></span>
</li>
<li><span class="section"><a href="dynamic-indices.html">动态更新索引</a></span>
</li>
<li><span class="section"><a href="near-real-time.html">近实时搜索</a></span>
</li>
<li><span class="section"><a href="translog.html">持久化变更</a></span>
</li>
<li><span class="section"><a href="merge-process.html">段合并</a></span>
</li>
</ul>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="search-in-depth.html">深入搜索</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="structured-search.html">结构化搜索</a></span>
<ul>
<li><span class="section"><a href="_finding_exact_values.html">精确值查找</a></span>
</li>
<li><span class="section"><a href="combining-filters.html">组合过滤器</a></span>
</li>
<li><span class="section"><a href="_finding_multiple_exact_values.html">查找多个精确值</a></span>
</li>
<li><span class="section"><a href="_ranges.html">范围</a></span>
</li>
<li><span class="section"><a href="_dealing_with_null_values.html">处理 Null 值</a></span>
</li>
<li><span class="section"><a href="filter-caching.html">关于缓存</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="full-text-search.html">全文搜索</a></span>
<ul>
<li><span class="section"><a href="term-vs-full-text.html">基于词项与基于全文</a></span>
</li>
<li><span class="section"><a href="match-query.html">匹配查询</a></span>
</li>
<li><span class="section"><a href="match-multi-word.html">多词查询</a></span>
</li>
<li><span class="section"><a href="bool-query.html">组合查询</a></span>
</li>
<li><span class="section"><a href="_how_match_uses_bool.html">如何使用布尔匹配</a></span>
</li>
<li><span class="section"><a href="_boosting_query_clauses.html">查询语句提升权重</a></span>
</li>
<li><span class="section"><a href="_controlling_analysis.html">控制分析</a></span>
</li>
<li><span class="section"><a href="relevance-is-broken.html">被破坏的相关度！</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="multi-field-search.html">多字段搜索</a></span>
<ul>
<li><span class="section"><a href="multi-query-strings.html">多字符串查询</a></span>
</li>
<li><span class="section"><a href="_single_query_string.html">单字符串查询</a></span>
</li>
<li><span class="section"><a href="_best_fields.html">最佳字段</a></span>
</li>
<li><span class="section"><a href="_tuning_best_fields_queries.html">最佳字段查询调优</a></span>
</li>
<li><span class="section"><a href="multi-match-query.html">multi_match 查询</a></span>
</li>
<li><span class="section"><a href="most-fields.html">多数字段</a></span>
</li>
<li><span class="section"><a href="_cross_fields_entity_search.html">跨字段实体搜索</a></span>
</li>
<li><span class="section"><a href="field-centric.html">字段中心式查询</a></span>
</li>
<li><span class="section"><a href="custom-all.html">自定义 _all 字段</a></span>
</li>
<li><span class="section"><a href="_cross_fields_queries.html">cross-fields 跨字段查询</a></span>
</li>
<li><span class="section"><a href="_exact_value_fields.html">Exact-Value 精确值字段</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="proximity-matching.html">近似匹配</a></span>
<ul>
<li><span class="section"><a href="phrase-matching.html">短语匹配</a></span>
</li>
<li><span class="section"><a href="slop.html">混合起来</a></span>
</li>
<li><span class="section"><a href="_multivalue_fields_2.html">多值字段</a></span>
</li>
<li><span class="section"><a href="_closer_is_better.html">越近越好</a></span>
</li>
<li><span class="section"><a href="proximity-relevance.html">使用邻近度提高相关度</a></span>
</li>
<li><span class="section"><a href="_Improving_Performance.html">性能优化</a></span>
</li>
<li><span class="section"><a href="shingles.html">寻找相关词</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="partial-matching.html">部分匹配</a></span>
<ul>
<li><span class="section"><a href="_postcodes_and_structured_data.html" class="current_page">邮编与结构化数据</a></span>
</li>
<li><span class="section"><a href="prefix-query.html">prefix 前缀查询</a></span>
</li>
<li><span class="section"><a href="_wildcard_and_regexp_queries.html">通配符与正则表达式查询</a></span>
</li>
<li><span class="section"><a href="_query_time_search_as_you_type.html">查询时输入即搜索</a></span>
</li>
<li><span class="section"><a href="_index_time_optimizations.html">索引时优化</a></span>
</li>
<li><span class="section"><a href="_ngrams_for_partial_matching.html">Ngrams 在部分匹配的应用</a></span>
</li>
<li><span class="section"><a href="_index_time_search_as_you_type.html">索引时输入即搜索</a></span>
</li>
<li><span class="section"><a href="ngrams-compound-words.html">Ngrams 在复合词的应用</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="controlling-relevance.html">控制相关度</a></span>
<ul>
<li><span class="section"><a href="scoring-theory.html">相关度评分背后的理论</a></span>
</li>
<li><span class="section"><a href="practical-scoring-function.html">Lucene 的实用评分函数</a></span>
</li>
<li><span class="section"><a href="query-time-boosting.html">查询时权重提升</a></span>
</li>
<li><span class="section"><a href="query-scoring.html">使用查询结构修改相关度</a></span>
</li>
<li><span class="section"><a href="not-quite-not.html">Not Quite Not</a></span>
</li>
<li><span class="section"><a href="ignoring-tfidf.html">忽略 TF/IDF</a></span>
</li>
<li><span class="section"><a href="function-score-query.html">function_score 查询</a></span>
</li>
<li><span class="section"><a href="boosting-by-popularity.html">按受欢迎度提升权重</a></span>
</li>
<li><span class="section"><a href="function-score-filters.html">过滤集提升权重</a></span>
</li>
<li><span class="section"><a href="random-scoring.html">随机评分</a></span>
</li>
<li><span class="section"><a href="decay-functions.html">越近越好</a></span>
</li>
<li><span class="section"><a href="Understanding-the-price-Clause.html">理解 price 价格语句</a></span>
</li>
<li><span class="section"><a href="script-score.html">脚本评分</a></span>
</li>
<li><span class="section"><a href="pluggable-similarites.html">可插拔的相似度算法</a></span>
</li>
<li><span class="section"><a href="changing-similarities.html">更改相似度</a></span>
</li>
<li><span class="section"><a href="relevance-conclusion.html">调试相关度是最后 10% 要做的事情</a></span>
</li>
</ul>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="languages.html">处理人类语言</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="language-intro.html">开始处理各种语言</a></span>
<ul>
<li><span class="section"><a href="using-language-analyzers.html">使用语言分析器</a></span>
</li>
<li><span class="section"><a href="configuring-language-analyzers.html">配置语言分析器</a></span>
</li>
<li><span class="section"><a href="language-pitfalls.html">混合语言的陷阱</a></span>
</li>
<li><span class="section"><a href="one-lang-docs.html">每份文档一种语言</a></span>
</li>
<li><span class="section"><a href="one-lang-fields.html">每个域一种语言</a></span>
</li>
<li><span class="section"><a href="mixed-lang-fields.html">混合语言域</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="identifying-words.html">词汇识别</a></span>
<ul>
<li><span class="section"><a href="standard-analyzer.html">标准分析器</a></span>
</li>
<li><span class="section"><a href="standard-tokenizer.html">标准分词器</a></span>
</li>
<li><span class="section"><a href="icu-plugin.html">安装 ICU 插件</a></span>
</li>
<li><span class="section"><a href="icu-tokenizer.html">icu_分词器</a></span>
</li>
<li><span class="section"><a href="char-filters.html">整理输入文本</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="token-normalization.html">归一化词元</a></span>
<ul>
<li><span class="section"><a href="lowercase-token-filter.html">举个例子</a></span>
</li>
<li><span class="section"><a href="asciifolding-token-filter.html">如果有口音</a></span>
</li>
<li><span class="section"><a href="unicode-normalization.html">Unicode的世界</a></span>
</li>
<li><span class="section"><a href="case-folding.html">Unicode 大小写折叠</a></span>
</li>
<li><span class="section"><a href="character-folding.html">Unicode 字符折叠</a></span>
</li>
<li><span class="section"><a href="sorting-collations.html">排序和整理</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="stemming.html">将单词还原为词根</a></span>
<ul>
<li><span class="section"><a href="algorithmic-stemmers.html">词干提取算法</a></span>
</li>
<li><span class="section"><a href="dictionary-stemmers.html">字典词干提取器</a></span>
</li>
<li><span class="section"><a href="hunspell.html">Hunspell 词干提取器</a></span>
</li>
<li><span class="section"><a href="choosing-a-stemmer.html">选择一个词干提取器</a></span>
</li>
<li><span class="section"><a href="controlling-stemming.html">控制词干提取</a></span>
</li>
<li><span class="section"><a href="stemming-in-situ.html">原形词干提取</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="stopwords.html">停用词: 性能与精度</a></span>
<ul>
<li><span class="section"><a href="pros-cons-stopwords.html">停用词的优缺点</a></span>
</li>
<li><span class="section"><a href="using-stopwords.html">使用停用词</a></span>
</li>
<li><span class="section"><a href="stopwords-performance.html">停用词与性能</a></span>
</li>
<li><span class="section"><a href="common-terms.html">词项的分别管理</a></span>
</li>
<li><span class="section"><a href="stopwords-phrases.html">停用词与短语查询</a></span>
</li>
<li><span class="section"><a href="common-grams.html">common_grams 过滤器</a></span>
</li>
<li><span class="section"><a href="stopwords-relavance.html">停用词与相关性</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="synonyms.html">同义词</a></span>
<ul>
<li><span class="section"><a href="using-synonyms.html">使用同义词</a></span>
</li>
<li><span class="section"><a href="synonym-formats.html">同义词格式</a></span>
</li>
<li><span class="section"><a href="synonyms-expand-or-contract.html">扩展或收缩</a></span>
</li>
<li><span class="section"><a href="synonyms-analysis-chain.html">同义词和分析链</a></span>
</li>
<li><span class="section"><a href="multi-word-synonyms.html">多词同义词和短语查询</a></span>
</li>
<li><span class="section"><a href="symbol-synonyms.html">符号同义词</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="fuzzy-matching.html">拼写错误</a></span>
<ul>
<li><span class="section"><a href="fuzziness.html">模糊性</a></span>
</li>
<li><span class="section"><a href="fuzzy-query.html">模糊查询</a></span>
</li>
<li><span class="section"><a href="fuzzy-match-query.html">模糊匹配查询</a></span>
</li>
<li><span class="section"><a href="fuzzy-scoring.html">模糊性评分</a></span>
</li>
<li><span class="section"><a href="phonetic-matching.html">语音匹配</a></span>
</li>
</ul>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="aggregations.html">聚合</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="aggs-high-level.html">高阶概念</a></span>
<ul>
<li><span class="section"><a href="_buckets.html">桶</a></span>
</li>
<li><span class="section"><a href="_metrics.html">指标</a></span>
</li>
<li><span class="section"><a href="_combining_the_two.html">桶和指标的组合</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="_aggregation_test_drive.html">尝试聚合</a></span>
<ul>
<li><span class="section"><a href="_adding_a_metric_to_the_mix.html">添加度量指标</a></span>
</li>
<li><span class="section"><a href="_buckets_inside_buckets.html">嵌套桶</a></span>
</li>
<li><span class="section"><a href="_one_final_modification.html">最后的修改</a></span>
</li>
</ul>
</li>
<li><span class="chapter"><a href="_building_bar_charts.html">条形图</a></span>
</li>
<li class="collapsible"><span class="chapter"><a href="_looking_at_time.html">按时间统计</a></span>
<ul>
<li><span class="section"><a href="_returning_empty_buckets.html">返回空 Buckets</a></span>
</li>
<li><span class="section"><a href="_extended_example.html">扩展例子</a></span>
</li>
<li><span class="section"><a href="_the_sky_8217_s_the_limit.html">潜力无穷</a></span>
</li>
</ul>
</li>
<li><span class="chapter"><a href="_scoping_aggregations.html">范围限定的聚合</a></span>
</li>
<li class="collapsible"><span class="chapter"><a href="_filtering_queries_and_aggregations.html">过滤和聚合</a></span>
<ul>
<li><span class="section"><a href="_filtering_queries.html">过滤</a></span>
</li>
<li><span class="section"><a href="_filter_bucket.html">过滤桶</a></span>
</li>
<li><span class="section"><a href="_post_filter.html">后过滤器</a></span>
</li>
<li><span class="section"><a href="_recap.html">小结</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="_sorting_multivalue_buckets.html">多桶排序</a></span>
<ul>
<li><span class="section"><a href="_intrinsic_sorts.html">内置排序</a></span>
</li>
<li><span class="section"><a href="_sorting_by_a_metric.html">按度量排序</a></span>
</li>
<li><span class="section"><a href="_sorting_based_on_deep_metrics.html">基于“深度”度量排序</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="_approximate_aggregations.html">近似聚合</a></span>
<ul>
<li><span class="section"><a href="cardinality.html">统计去重后的数量</a></span>
</li>
<li><span class="section"><a href="percentiles.html">百分位计算</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="significant-terms.html">通过聚合发现异常指标</a></span>
<ul>
<li><span class="section"><a href="_significant_terms_demo.html">significant_terms 演示</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="docvalues-and-fielddata.html">Doc Values and Fielddata</a></span>
<ul>
<li><span class="section"><a href="docvalues.html">Doc Values</a></span>
</li>
<li><span class="section"><a href="_deep_dive_on_doc_values.html">深入理解 Doc Values</a></span>
</li>
<li><span class="section"><a href="aggregations-and-analysis.html">聚合与分析</a></span>
</li>
<li><span class="section"><a href="_limiting_memory_usage.html">限制内存使用</a></span>
</li>
<li><span class="section"><a href="_fielddata_filtering.html">Fielddata 的过滤</a></span>
</li>
<li><span class="section"><a href="preload-fielddata.html">预加载 fielddata</a></span>
</li>
<li><span class="section"><a href="_preventing_combinatorial_explosions.html">优化聚合查询</a></span>
</li>
</ul>
</li>
<li><span class="chapter"><a href="_closing_thoughts.html">总结</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="geoloc.html">地理位置</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="geopoints.html">地理坐标点</a></span>
<ul>
<li><span class="section"><a href="lat-lon-formats.html">经纬度坐标格式</a></span>
</li>
<li><span class="section"><a href="filter-by-geopoint.html">通过地理坐标点过滤</a></span>
</li>
<li><span class="section"><a href="geo-bounding-box.html">地理坐标盒模型过滤器</a></span>
</li>
<li><span class="section"><a href="geo-distance.html">地理距离过滤器</a></span>
</li>
<li><span class="section"><a href="sorting-by-distance.html">按距离排序</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="geohashes.html">Geohashes</a></span>
<ul>
<li><span class="section"><a href="geohash-mapping.html">Geohashes 映射</a></span>
</li>
<li><span class="section"><a href="geohash-cell-query.html">Geohash 单元查询</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="geo-aggs.html">地理位置聚合</a></span>
<ul>
<li><span class="section"><a href="geo-distance-agg.html">地理距离聚合</a></span>
</li>
<li><span class="section"><a href="geohash-grid-agg.html">Geohash 网格聚合</a></span>
</li>
<li><span class="section"><a href="geo-bounds-agg.html">地理边界聚合</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="geo-shapes.html">地理形状</a></span>
<ul>
<li><span class="section"><a href="mapping-geo-shapes.html">映射地理形状</a></span>
</li>
<li><span class="section"><a href="indexing-geo-shapes.html">索引地理形状</a></span>
</li>
<li><span class="section"><a href="querying-geo-shapes.html">查询地理形状</a></span>
</li>
<li><span class="section"><a href="indexed-geo-shapes.html">在查询中使用已索引的形状</a></span>
</li>
</ul>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="modeling-your-data.html">数据建模</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="relations.html">关联关系处理</a></span>
<ul>
<li><span class="section"><a href="application-joins.html">应用层联接</a></span>
</li>
<li><span class="section"><a href="denormalization.html">非规范化你的数据</a></span>
</li>
<li><span class="section"><a href="top-hits.html">字段折叠</a></span>
</li>
<li><span class="section"><a href="denormalization-concurrency.html">非规范化和并发</a></span>
</li>
<li><span class="section"><a href="concurrency-solutions.html">解决并发问题</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="nested-objects.html">嵌套对象</a></span>
<ul>
<li><span class="section"><a href="nested-mapping.html">嵌套对象映射</a></span>
</li>
<li><span class="section"><a href="nested-query.html">嵌套对象查询</a></span>
</li>
<li><span class="section"><a href="nested-sorting.html">使用嵌套字段排序</a></span>
</li>
<li><span class="section"><a href="nested-aggregation.html">嵌套聚合</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="parent-child.html">父-子关系文档</a></span>
<ul>
<li><span class="section"><a href="parent-child-mapping.html">父-子关系文档映射</a></span>
</li>
<li><span class="section"><a href="indexing-parent-child.html">构建父-子文档索引</a></span>
</li>
<li><span class="section"><a href="has-child.html">通过子文档查询父文档</a></span>
</li>
<li><span class="section"><a href="has-parent.html">通过父文档查询子文档</a></span>
</li>
<li><span class="section"><a href="children-agg.html">子文档聚合</a></span>
</li>
<li><span class="section"><a href="grandparents.html">祖辈与孙辈关系</a></span>
</li>
<li><span class="section"><a href="parent-child-performance.html">实际使用中的一些建议</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="scale.html">扩容设计</a></span>
<ul>
<li><span class="section"><a href="shard-scale.html">扩容的单元</a></span>
</li>
<li><span class="section"><a href="overallocation.html">分片预分配</a></span>
</li>
<li><span class="section"><a href="kagillion-shards.html">海量分片</a></span>
</li>
<li><span class="section"><a href="capacity-planning.html">容量规划</a></span>
</li>
<li><span class="section"><a href="replica-shards.html">副本分片</a></span>
</li>
<li><span class="section"><a href="multiple-indices.html">多索引</a></span>
</li>
<li><span class="section"><a href="time-based.html">基于时间的数据</a></span>
</li>
<li><span class="section"><a href="index-templates.html">索引模板</a></span>
</li>
<li><span class="section"><a href="retiring-data.html">数据过期</a></span>
</li>
<li><span class="section"><a href="user-based.html">基于用户的数据</a></span>
</li>
<li><span class="section"><a href="shared-index.html">共享索引</a></span>
</li>
<li><span class="section"><a href="faking-it.html">利用别名实现一个用户一个索引</a></span>
</li>
<li><span class="section"><a href="one-big-user.html">一个大的用户</a></span>
</li>
<li><span class="section"><a href="finite-scale.html">扩容并不是无限的</a></span>
</li>
</ul>
</li>
</ul>
</li>
<li class="collapsible"><span class="part"><a href="administration.html">管理、监控和部署</a></span>
<ul>
<li class="collapsible"><span class="chapter"><a href="cluster-admin.html">监控</a></span>
<ul>
<li><span class="section"><a href="marvel.html">Marvel 监控</a></span>
</li>
<li><span class="section"><a href="_cluster_health.html">集群健康</a></span>
</li>
<li><span class="section"><a href="_monitoring_individual_nodes.html">监控单个节点</a></span>
</li>
<li><span class="section"><a href="_cluster_stats.html">集群统计</a></span>
</li>
<li><span class="section"><a href="_index_stats.html">索引统计</a></span>
</li>
<li><span class="section"><a href="_pending_tasks.html">等待中的任务</a></span>
</li>
<li><span class="section"><a href="_cat_api.html">cat API</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="deploy.html">部署</a></span>
<ul>
<li><span class="section"><a href="hardware.html">硬件</a></span>
</li>
<li><span class="section"><a href="_java_virtual_machine.html">Java 虚拟机</a></span>
</li>
<li><span class="section"><a href="_transport_client_versus_node_client.html">Transport Client 与 Node Client</a></span>
</li>
<li><span class="section"><a href="_configuration_management.html">配置管理</a></span>
</li>
<li><span class="section"><a href="important-configuration-changes.html">重要配置的修改</a></span>
</li>
<li><span class="section"><a href="dont-touch-these-settings.html">不要触碰这些配置！</a></span>
</li>
<li><span class="section"><a href="heap-sizing.html">堆内存:大小和交换</a></span>
</li>
<li><span class="section"><a href="_file_descriptors_and_mmap.html">文件描述符和 MMap</a></span>
</li>
<li><span class="section"><a href="_revisit_this_list_before_production.html">在生产之前，重温这个列表</a></span>
</li>
</ul>
</li>
<li class="collapsible"><span class="chapter"><a href="post_deploy.html">部署后</a></span>
<ul>
<li><span class="section"><a href="_changing_settings_dynamically.html">动态变更设置</a></span>
</li>
<li><span class="section"><a href="logging.html">日志记录</a></span>
</li>
<li><span class="section"><a href="indexing-performance.html">索引性能技巧</a></span>
</li>
<li><span class="section"><a href="_delaying_shard_allocation.html">推迟分片分配</a></span>
</li>
<li><span class="section"><a href="_rolling_restarts.html">滚动重启</a></span>
</li>
<li><span class="section"><a href="backing-up-your-cluster.html">备份你的集群</a></span>
</li>
<li><span class="section"><a href="_restoring_from_a_snapshot.html">从快照恢复</a></span>
</li>
<li><span class="section"><a href="_clusters_are_living_breathing_creatures.html">集群是活着的、呼吸着的生命</a></span>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
EOF;

    return $docList;
}

/**
 * 从官网抓取文档, 并存入本地
 */
function getOriginalHtmls() {
    $docList = tepGetDocList();
    $arrLink = QueryList::getInstance()
        ->setHtml($docList)
        ->find('a')
        ->attrs('href')
        ->toArray();
    //补充首页
    $arrLink[] = 'index.html';

    $retry = 10;//最多尝试10次
    $arrLinkFailed = [];
    foreach ($arrLink AS $link) {
        if (is_file('2.x/origin/' . $link)) {
            echo $link . '已存在, 忽略' . PHP_EOL;
            continue;
        }
        $rt = false;
        echo '获取 ' . $link;
        for ($i = 1; $i < $retry; $i++) {
            //$rt = getAndPut($link);
            $rt = getOriginalHtml($link);
            if ($rt == true) {
                break;
            } else {
                echo '尝试' . $i;
            }
        }
        if ($rt === false) {
            $arrLinkFailed[] = $link;
            echo ' ==> 失败';
        } else {
            echo ' ==> 成功';
        }
        echo PHP_EOL;
        sleep(2);
    }

    //记录获取失败的链接
    if (!empty($arrLinkFailed)) {
        file_put_contents('v2failed.log', date('Y-m-d H:i:s') . PHP_EOL . json_encode($arrLinkFailed) . PHP_EOL);
    }
}

/**
 * 获取原始html内容并保存
 * @param string $link
 * @return bool
 */
function getOriginalHtml($link) {
    $prefix = 'https://www.elastic.co/guide/cn/elasticsearch/guide/current/';

    $url = $prefix . $link;
    try {
        $originHtml = QueryList::getInstance()
            ->get($url, [], ['timeout' => 10])
            ->getHtml();
    } catch (Exception $ex) {
        return false;
    }
    if (empty($originHtml)) {
        return false;
    }
    //写入
    file_put_contents('2.x/origin/' . $link, $originHtml);
    return true;
}

/**
 * 把官网的文档转换到本地
 */
function convertToLocalFile($link) {
    $html = file_get_contents('2.x/origin/' . $link);
    $document = QueryList::getInstance()->setHtml($html);

    //获取title
    $title = $document->find('title')->text();
    echo $title . PHP_EOL;

    //获取主要内容
    $body = $document->find('#guide>.container>.row>.guide-section')
        ->html();
    if (empty($body)) {
        return false;
    }

    //if ($link === 'index.html') {
    //    //首页右边不需要导航
    //    $docList = '';
    //} else {
    //    $docList = tepGetDocList();
    //}
    $docList = ''; //由js去渲染
    $html = <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>$title</title>
	<link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
<div style="color:gray;">原文地址: https://www.elastic.co/guide/cn/elasticsearch/guide/current/$link</div>
<section id="guide" lang="zh_cn">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-8 guide-section">
            $body
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4" id="right_col">
            $docList
            </div>
        </div>
    </div>
</section>
<script src="js.js"></script>
</body>
</html>
EOF;

    //写入
    file_put_contents('2.x/local/' . $link, $html);

    return true;
}

function convertToLocalFiles() {
    $folder = '2.x' . DIRECTORY_SEPARATOR . 'origin';
    $arr = scandir($folder);
    $files = [];
    foreach ($arr as $v) {
        $temp = $folder . DIRECTORY_SEPARATOR . $v;
        if (is_dir($temp)) {
            if ($v == '.' || $v == '..') {
                //系统文件夹
                continue;
            }
        } else {
            $files[] = $v;
        }
    }
    foreach ($files AS $file) {
        $rt = convertToLocalFile($file);
        if ($rt === true) {
            echo $file . ' 成功' . PHP_EOL;
        } else {
            echo $file . ' 失败' . PHP_EOL;
        }
    }
}

//抓取原文档
//getOriginalHtmls();

//原文档转换到本地文档
//convertToLocalFile('_full_text_search.html');//单个转换测试
convertToLocalFiles();
