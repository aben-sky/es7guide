//数据来自 `convertOfficialMenuToJson.html` 转换的, 以方便中文版的翻译工作
var esNavLinks = [
    {
        "url": "elasticsearch-intro.html",
        "text": "Elasticsearch是什么?",
        "title": "Elasticsearch是什么?",
        "sub": [
            {
                "url": "documents-indices.html",
                "text": "数据输入: 文档和索引",
                "title": "数据输入: 文档和索引"
            },
            {
                "url": "search-analyze.html",
                "text": "信息输出: 搜索和分析",
                "title": "信息输出: 搜索和分析"
            },
            {
                "url": "scalability.html",
                "text": "可伸缩性和弹性",
                "title": "可伸缩性和弹性"
            }
        ]
    },
    {
        "url": "release-highlights.html",
        "text": "7.7版本的新特性",
        "title": "7.7版本的新特性"
    },
    {
        "url": "getting-started.html",
        "text": "开始使用Elasticsearch",
        "title": "开始使用Elasticsearch",
        "sub": [
            {
                "url": "getting-started-install.html",
                "text": "安装并运行",
                "title": "安装并运行"
            },
            {
                "url": "getting-started-index.html",
                "text": "索引一些文档",
                "title": "索引一些文档"
            },
            {
                "url": "getting-started-search.html",
                "text": "开始搜索",
                "title": "开始搜索"
            },
            {
                "url": "getting-started-aggregations.html",
                "text": "用聚合分析结果",
                "title": "用聚合分析结果"
            },
            {
                "url": "getting-started-next-steps.html",
                "text": "下一步做什么?",
                "title": "下一步做什么"
            }
        ]
    },
    {
        "url": "setup.html",
        "text": "安装和设置",
        "title": "安装和设置",
        "sub": [
            {
                "url": "install-elasticsearch.html",
                "text": "安装Elasticsearch",
                "title": "安装Elasticsearch",
                "sub": [
                    {
                        "url": "targz.html",
                        "text": "在Linux/MacOS上安装Elasticsearch",
                        "title": "在Linux/MacOS上安装Elasticsearch"
                    },
                    {
                        "url": "zip-windows.html",
                        "text": "在Windows上使用 .zip 安装",
                        "title": "在Windows上使用 .zip 安装"
                    },
                    {
                        "url": "deb.html",
                        "text": "使用Debian安装包安装",
                        "title": "使用Debian安装包安装"
                    },
                    {
                        "url": "rpm.html",
                        "text": "使用RPM安装包安装",
                        "title": "使用RPM安装包安装"
                    },
                    {
                        "url": "windows.html",
                        "text": "使用windows安装包安装",
                        "title": "使用windows安装包安装"
                    },
                    {
                        "url": "docker.html",
                        "text": "用Docker安装",
                        "title": "用Docker安装"
                    },
                    {
                        "url": "brew.html",
                        "text": "在MacOS上用Homebrew安装",
                        "title": "在MacOS上用Homebrew安装"
                    }
                ]
            },
            {
                "url": "settings.html",
                "text": "配置 Elasticsearch",
                "title": "配置 Elasticsearch",
                "sub": [
                    {
                        "url": "jvm-options.html",
                        "text": "设置 JVM 选项",
                        "title": "设置 JVM 选项"
                    },
                    {
                        "url": "secure-settings.html",
                        "text": "安全设置",
                        "title": "安全设置"
                    },
                    {
                        "url": "auditing-settings.html",
                        "text": "审计设置",
                        "title": "审计设置"
                    },
                    {
                        "url": "circuit-breaker.html",
                        "text": "熔断设置",
                        "title": "熔断设置"
                    },
                    {
                        "url": "modules-cluster.html",
                        "text": "集群级分片分配和路由设置",
                        "title": "集群级分片分配和路由设置"
                    },
                    {
                        "url": "ccr-settings.html",
                        "text": "跨集群复制设置",
                        "title": "跨集群复制设置"
                    },
                    {
                        "url": "modules-discovery-settings.html",
                        "text": "发现和集群信息设置",
                        "title": "发现和集群信息设置"
                    },
                    {
                        "url": "modules-fielddata.html",
                        "text": "字段数据缓存设置",
                        "title": "字段数据缓存设置"
                    },
                    {
                        "url": "modules-http.html",
                        "text": "HTTP",
                        "title": "HTTP"
                    },
                    {
                        "url": "ilm-settings.html",
                        "text": "索引生命周期管理设置",
                        "title": "索引生命周期管理设置"
                    },
                    {
                        "url": "recovery.html",
                        "text": "索引恢复设置",
                        "title": "索引恢复设置"
                    },
                    {
                        "url": "indexing-buffer.html",
                        "text": "索引时的缓冲区设置",
                        "title": "索引时的缓冲区设置"
                    },
                    {
                        "url": "license-settings.html",
                        "text": "许可证设置",
                        "title": "许可证设置"
                    },
                    {
                        "url": "modules-gateway.html",
                        "text": "本地网关设置",
                        "title": "本地网关设置"
                    },
                    {
                        "url": "logging.html",
                        "text": "日志设置",
                        "title": "日志设置"
                    },
                    {
                        "url": "ml-settings.html",
                        "text": "机器学习设置",
                        "title": "机器学习设置"
                    },
                    {
                        "url": "monitoring-settings.html",
                        "text": "监控设置",
                        "title": "监控设置"
                    },
                    {
                        "url": "modules-node.html",
                        "text": "节点",
                        "title": "节点"
                    },
                    {
                        "url": "modules-network.html",
                        "text": "网络设置",
                        "title": "网络设置"
                    },
                    {
                        "url": "query-cache.html",
                        "text": "节点查询缓存设置",
                        "title": "节点查询缓存设置"
                    },
                    {
                        "url": "search-settings.html",
                        "text": "搜索设置",
                        "title": "搜索设置"
                    },
                    {
                        "url": "security-settings.html",
                        "text": "安全设置",
                        "title": "安全设置"
                    },
                    {
                        "url": "shard-request-cache.html",
                        "text": "分片的请求缓存设置",
                        "title": "分片的请求缓存设置"
                    },
                    {
                        "url": "slm-settings.html",
                        "text": "快照的生命周期管理设置",
                        "title": "快照的生命周期管理设置"
                    },
                    {
                        "url": "sql-settings.html",
                        "text": "SQL访问设置",
                        "title": "SQL访问设置"
                    },
                    {
                        "url": "transform-settings.html",
                        "text": "转换(transform)设置",
                        "title": "转换(transform)设置"
                    },
                    {
                        "url": "modules-transport.html",
                        "text": "传输(transport)",
                        "title": "传输(transport)"
                    },
                    {
                        "url": "modules-threadpool.html",
                        "text": "线程池",
                        "title": "线程池"
                    },
                    {
                        "url": "notification-settings.html",
                        "text": "预警设置",
                        "title": "预警设置"
                    }
                ]
            },
            {
                "url": "important-settings.html",
                "text": "Elasticsearch的重要的配置",
                "title": "Elasticsearch的重要的配置",
                "sub": [
                    {
                        "url": "path-settings.html",
                        "text": "path.data 和 path.logs",
                        "title": "path.data 和 path.logs"
                    },
                    {
                        "url": "cluster.name.html",
                        "text": "集群名称(cluster.name)",
                        "title": "集群名称(cluster.name)"
                    },
                    {
                        "url": "node.name.html",
                        "text": "节点名称(node.name)",
                        "title": "节点名称(node.name)"
                    },
                    {
                        "url": "network.host.html",
                        "text": "网络之宿主绑定(network.host)",
                        "title": "网络之宿主绑定(network.host)"
                    },
                    {
                        "url": "discovery-settings.html",
                        "text": "发现(discovery)和集群形成的重要设置",
                        "title": "发现(discovery)和集群形成的重要设置"
                    },
                    {
                        "url": "heap-size.html",
                        "text": "设置堆大小",
                        "title": "设置堆大小"
                    },
                    {
                        "url": "heap-dump-path.html",
                        "text": "JVM堆的转储路径",
                        "title": "JVM堆的转储路径"
                    },
                    {
                        "url": "gc-logging.html",
                        "text": "垃圾回收日志",
                        "title": "垃圾回收日志"
                    },
                    {
                        "url": "es-tmpdir.html",
                        "text": "临时目录",
                        "title": "临时目录"
                    },
                    {
                        "url": "error-file-path.html",
                        "text": "JVM致命错误日志",
                        "title": "JVM致命错误日志"
                    }
                ]
            },
            {
                "url": "system-config.html",
                "text": "重要的系统配置",
                "title": "重要的系统配置",
                "sub": [
                    {
                        "url": "setting-system-settings.html",
                        "text": "配置系统设置",
                        "title": "配置系统设置"
                    },
                    {
                        "url": "setup-configuration-memory.html",
                        "text": "禁用交换(swapping)",
                        "title": "禁用交换(swapping)"
                    },
                    {
                        "url": "file-descriptors.html",
                        "text": "文件描述符",
                        "title": "文件描述符"
                    },
                    {
                        "url": "vm-max-map-count.html",
                        "text": "虚拟内存",
                        "title": "虚拟内存"
                    },
                    {
                        "url": "max-number-of-threads.html",
                        "text": "线程数量",
                        "title": "线程数量"
                    },
                    {
                        "url": "networkaddress-cache-ttl.html",
                        "text": "DNS缓存设置",
                        "title": "DNS缓存设置"
                    },
                    {
                        "url": "executable-jna-tmpdir.html",
                        "text": "不使用noexec挂载JNA临时目录",
                        "title": "不使用noexec挂载JNA临时目录"
                    }
                ]
            },
            {
                "url": "bootstrap-checks.html",
                "text": "引导检查",
                "title": "引导检查",
                "sub": [
                    {
                        "url": "_heap_size_check.html",
                        "text": "堆大小检查",
                        "title": "堆大小检查"
                    },
                    {
                        "url": "_file_descriptor_check.html",
                        "text": "文件描述符检查",
                        "title": "文件描述符检查"
                    },
                    {
                        "url": "_memory_lock_check.html",
                        "text": "内存锁检查",
                        "title": "内存锁检查"
                    },
                    {
                        "url": "max-number-threads-check.html",
                        "text": "最大线程数检查",
                        "title": "最大线程数检查"
                    },
                    {
                        "url": "_max_file_size_check.html",
                        "text": "最大文件大小检查",
                        "title": "最大文件大小检查"
                    },
                    {
                        "url": "max-size-virtual-memory-check.html",
                        "text": "最大虚拟内存检查",
                        "title": "最大虚拟内存检查"
                    },
                    {
                        "url": "_maximum_map_count_check.html",
                        "text": "最大映射数量检查",
                        "title": "最大映射数量检查"
                    },
                    {
                        "url": "_client_jvm_check.html",
                        "text": "客户端JVM检查",
                        "title": "客户端JVM检查"
                    },
                    {
                        "url": "_use_serial_collector_check.html",
                        "text": "使用串行回收器检查",
                        "title": "使用串行回收器检查"
                    },
                    {
                        "url": "_system_call_filter_check.html",
                        "text": "系统调用过滤器检查",
                        "title": "系统调用过滤器检查"
                    },
                    {
                        "url": "_onerror_and_onoutofmemoryerror_checks.html",
                        "text": "OnError 和 OnOutOfMemoryError 检查",
                        "title": "OnError 和 OnOutOfMemoryError 检查"
                    },
                    {
                        "url": "_early_access_check.html",
                        "text": "抢先体验检查",
                        "title": "抢先体验检查"
                    },
                    {
                        "url": "_g1gc_check.html",
                        "text": "垃圾优先的垃圾回收器(G1GC)检查",
                        "title": "垃圾优先的垃圾回收器(G1GC)检查"
                    },
                    {
                        "url": "_all_permission_check.html",
                        "text": "全部权限检查",
                        "title": "全部权限检查"
                    },
                    {
                        "url": "_discovery_configuration_check.html",
                        "text": "发现配置检查",
                        "title": "发现配置检查"
                    }
                ]
            },
            {
                "url": "bootstrap-checks-xpack.html",
                "text": "X-Pack引导检查",
                "title": "X-Pack引导检查"
            },
            {
                "url": "starting-elasticsearch.html",
                "text": "启动Elasticsearch",
                "title": "启动Elasticsearch"
            },
            {
                "url": "stopping-elasticsearch.html",
                "text": "停止Elasticsearch",
                "title": "停止Elasticsearch"
            },
            {
                "url": "modules-discovery.html",
                "text": "发现及集群形成",
                "title": "发现及集群形成",
                "sub": [
                    {
                        "url": "modules-discovery-hosts-providers.html",
                        "text": "发现",
                        "title": "发现"
                    },
                    {
                        "url": "modules-discovery-quorums.html",
                        "text": "基于法定人数的选举机制",
                        "title": "基于法定人数的选举机制"
                    },
                    {
                        "url": "modules-discovery-voting.html",
                        "text": "投票配置",
                        "title": "投票配置"
                    },
                    {
                        "url": "modules-discovery-bootstrap-cluster.html",
                        "text": "引导一个集群",
                        "title": "引导一个集群"
                    },
                    {
                        "url": "cluster-state-publishing.html",
                        "text": "发布集群状态",
                        "title": "发布集群状态"
                    },
                    {
                        "url": "cluster-fault-detection.html",
                        "text": "集群故障检测",
                        "title": "集群故障检测"
                    }
                ]
            },
            {
                "url": "add-elasticsearch-nodes.html",
                "text": "向集群中添加/移除节点",
                "title": "向集群中添加/移除节点"
            },
            {
                "url": "restart-cluster.html",
                "text": "全集群重启和滚动重启",
                "title": "全集群重启和滚动重启"
            },
            {
                "url": "modules-remote-clusters.html",
                "text": "远程集群",
                "title": "远程集群"
            },
            {
                "url": "setup-xpack.html",
                "text": "安装X-Pack",
                "title": "安装X-Pack"
            },
            {
                "url": "setup-xpack-client.html",
                "text": "配置X-Pack的Java客户端",
                "title": "配置X-Pack的Java客户端"
            },
            {
                "url": "modules-plugins.html",
                "text": "插件",
                "title": "插件"
            }
        ]
    },
    {
        "url": "setup-upgrade.html",
        "text": "升级Elasticsearch",
        "title": "升级Elasticsearch",
        "sub": [
            {
                "url": "rolling-upgrades.html",
                "text": "滚动升级",
                "title": "滚动升级"
            },
            {
                "url": "restart-upgrade.html",
                "text": "全集群重启升级",
                "title": "全集群重启升级"
            },
            {
                "url": "reindex-upgrade.html",
                "text": "在升级前重新索引",
                "title": "在升级前重新索引",
                "sub": [
                    {
                        "url": "reindex-upgrade-inplace.html",
                        "text": "原地重新索引",
                        "title": "原地重新索引"
                    },
                    {
                        "url": "reindex-upgrade-remote.html",
                        "text": "从远程集群重新索引",
                        "title": "从远程集群重新索引"
                    }
                ]
            }
        ]
    },
    {
        "url": "search-your-data.html",
        "text": "搜索你的数据",
        "title": "搜索你的数据",
        "sub": [
            {
                "url": "run-a-search.html",
                "text": "运行一个搜索",
                "title": "运行一个搜索"
            },
            {
                "url": "near-real-time.html",
                "text": "近实时搜索",
                "title": "近实时搜索"
            },
            {
                "url": "async-search-intro.html",
                "text": "运行耗时的搜索",
                "title": "运行耗时的搜索"
            },
            {
                "url": "modules-cross-cluster-search.html",
                "text": "跨集群搜索",
                "title": "跨集群搜索"
            }
        ]
    },
    {
        "url": "query-dsl.html",
        "text": "查询领域特定语言(Query DSL)",
        "title": "查询领域特定语言(Query DSL)",
        "sub": [
            {
                "url": "query-filter-context.html",
                "text": "query 和 filter 上下文",
                "title": "query 和 filter 上下文"
            },
            {
                "url": "compound-queries.html",
                "text": "复合查询",
                "title": "复合查询",
                "sub": [
                    {
                        "url": "query-dsl-bool-query.html",
                        "text": "bool (布尔)",
                        "title": "bool (布尔)"
                    },
                    {
                        "url": "query-dsl-boosting-query.html",
                        "text": "boosting (提高得分)",
                        "title": "boosting (提高得分)"
                    },
                    {
                        "url": "query-dsl-constant-score-query.html",
                        "text": "constant_score (常量得分)",
                        "title": "constant_score (常量得分)"
                    },
                    {
                        "url": "query-dsl-dis-max-query.html",
                        "text": "dis_max (逻辑或最大值)",
                        "title": "dis_max (逻辑或最大值)"
                    },
                    {
                        "url": "query-dsl-function-score-query.html",
                        "text": "function_score (函数评分)",
                        "title": "function_score (函数评分)"
                    }
                ]
            },
            {
                "url": "full-text-queries.html",
                "text": "全文查询",
                "title": "全文查询",
                "sub": [
                    {
                        "url": "query-dsl-intervals-query.html",
                        "text": "intervals",
                        "title": "intervals"
                    },
                    {
                        "url": "query-dsl-match-query.html",
                        "text": "匹配(match)",
                        "title": "匹配(match)"
                    },
                    {
                        "url": "query-dsl-match-bool-prefix-query.html",
                        "text": "布尔前缀匹配(match_bool_prefix)",
                        "title": "布尔前缀匹配(match_bool_prefix"
                    },
                    {
                        "url": "query-dsl-match-query-phrase.html",
                        "text": "短语匹配(match_phrase)",
                        "title": "短语匹配(match_phrase)"
                    },
                    {
                        "url": "query-dsl-match-query-phrase-prefix.html",
                        "text": "短语前缀匹配(match_phrase_prefix)",
                        "title": "短语前缀匹配(match_phrase_prefix)"
                    },
                    {
                        "url": "query-dsl-multi-match-query.html",
                        "text": "多字段匹配(multi_match)",
                        "title": "多字段匹配(multi_match)"
                    },
                    {
                        "url": "query-dsl-common-terms-query.html",
                        "text": "常用(common)词项查询</a>(7.3.0废弃)",
                        "title": "常用(common)词项查询</a>(7.3.0废弃)"
                    },
                    {
                        "url": "query-dsl-query-string-query.html",
                        "text": "查询字符串(query_string)",
                        "title": "查询字符串(query_string)"
                    },
                    {
                        "url": "query-dsl-simple-query-string-query.html",
                        "text": "简单查询字符串(simple_query_string)",
                        "title": "简单查询字符串(simple_query_string)"
                    }
                ]
            },
            {
                "url": "geo-queries.html",
                "text": "地理位置(geo)查询",
                "title": "地理位置(geo)查询",
                "sub": [
                    {
                        "url": "query-dsl-geo-bounding-box-query.html",
                        "text": "地理位置边界框(geo_bounding_box)",
                        "title": "地理位置边界框(geo_bounding_box)"
                    },
                    {
                        "url": "query-dsl-geo-distance-query.html",
                        "text": "地理位置距离(geo_distance)",
                        "title": "地理位置距离(geo_distance)"
                    },
                    {
                        "url": "query-dsl-geo-polygon-query.html",
                        "text": "地理位置多边形(geo_polygon)",
                        "title": "地理位置多边形(geo_polygon)"
                    },
                    {
                        "url": "query-dsl-geo-shape-query.html",
                        "text": "地理位置形状(geo_shape)",
                        "title": "地理位置形状(geo_shape)"
                    }
                ]
            },
            {
                "url": "shape-queries.html",
                "text": "形状查询",
                "title": "形状查询",
                "sub": [
                    {
                        "url": "query-dsl-shape-query.html",
                        "text": "形状(shape)",
                        "title": "形状(shape)"
                    }
                ]
            },
            {
                "url": "joining-queries.html",
                "text": "联结(join)",
                "title": "联结(join)",
                "sub": [
                    {
                        "url": "query-dsl-nested-query.html",
                        "text": "嵌套(nested)",
                        "title": "嵌套(nested)"
                    },
                    {
                        "url": "query-dsl-has-child-query.html",
                        "text": "has_child",
                        "title": "has_child"
                    },
                    {
                        "url": "query-dsl-has-parent-query.html",
                        "text": "has_parent",
                        "title": "has_parent"
                    },
                    {
                        "url": "query-dsl-parent-id-query.html",
                        "text": "parent_id",
                        "title": "parent_id"
                    },
                    {
                        "url": "_notes_3.html",
                        "text": "注意",
                        "title": "注意"
                    }
                ]
            },
            {
                "url": "query-dsl-match-all-query.html",
                "text": "匹配所有(match_all)",
                "title": "匹配所有(match_all)"
            },
            {
                "url": "span-queries.html",
                "text": "跨度(span)",
                "title": "跨度(span)",
                "sub": [
                    {
                        "url": "query-dsl-span-containing-query.html",
                        "text": "span_containing",
                        "title": "span_containing"
                    },
                    {
                        "url": "query-dsl-span-field-masking-query.html",
                        "text": "field_masking_span",
                        "title": "field_masking_span"
                    },
                    {
                        "url": "query-dsl-span-first-query.html",
                        "text": "span_first",
                        "title": "span_first"
                    },
                    {
                        "url": "query-dsl-span-multi-term-query.html",
                        "text": "span_multi",
                        "title": "span_multi"
                    },
                    {
                        "url": "query-dsl-span-near-query.html",
                        "text": "span_near",
                        "title": "span_near"
                    },
                    {
                        "url": "query-dsl-span-not-query.html",
                        "text": "span_not",
                        "title": "span_not"
                    },
                    {
                        "url": "query-dsl-span-or-query.html",
                        "text": "span_or",
                        "title": "span_or"
                    },
                    {
                        "url": "query-dsl-span-term-query.html",
                        "text": "span_term",
                        "title": "span_term"
                    },
                    {
                        "url": "query-dsl-span-within-query.html",
                        "text": "span_within",
                        "title": "span_within"
                    }
                ]
            },
            {
                "url": "specialized-queries.html",
                "text": "专业的查询",
                "title": "专业的查询",
                "sub": [
                    {
                        "url": "query-dsl-distance-feature-query.html",
                        "text": "distance_feature",
                        "title": "distance_feature"
                    },
                    {
                        "url": "query-dsl-mlt-query.html",
                        "text": "more_like_this",
                        "title": "more_like_this"
                    },
                    {
                        "url": "query-dsl-percolate-query.html",
                        "text": "percolate",
                        "title": "percolate"
                    },
                    {
                        "url": "_notes_4.html",
                        "text": "注意",
                        "title": "注意"
                    },
                    {
                        "url": "query-dsl-rank-feature-query.html",
                        "text": "rank_feature",
                        "title": "rank_feature"
                    },
                    {
                        "url": "query-dsl-script-query.html",
                        "text": "script",
                        "title": "script"
                    },
                    {
                        "url": "query-dsl-script-score-query.html",
                        "text": "script_score",
                        "title": "script_score"
                    },
                    {
                        "url": "query-dsl-wrapper-query.html",
                        "text": "wrapper",
                        "title": "wrapper"
                    },
                    {
                        "url": "query-dsl-pinned-query.html",
                        "text": "pinned",
                        "title": "pinned"
                    }
                ]
            },
            {
                "url": "term-level-queries.html",
                "text": "词项级查询",
                "title": "词项级查询",
                "sub": [
                    {
                        "url": "query-dsl-exists-query.html",
                        "text": "exists",
                        "title": "exists"
                    },
                    {
                        "url": "query-dsl-fuzzy-query.html",
                        "text": "fuzzy",
                        "title": "fuzzy"
                    },
                    {
                        "url": "query-dsl-ids-query.html",
                        "text": "ids",
                        "title": "ids"
                    },
                    {
                        "url": "query-dsl-prefix-query.html",
                        "text": "prefix",
                        "title": "prefix"
                    },
                    {
                        "url": "query-dsl-range-query.html",
                        "text": "range",
                        "title": "range"
                    },
                    {
                        "url": "query-dsl-regexp-query.html",
                        "text": "regexp",
                        "title": "regexp"
                    },
                    {
                        "url": "query-dsl-term-query.html",
                        "text": "term",
                        "title": "term"
                    },
                    {
                        "url": "query-dsl-terms-query.html",
                        "text": "terms",
                        "title": "terms"
                    },
                    {
                        "url": "query-dsl-terms-set-query.html",
                        "text": "terms_set",
                        "title": "terms_set"
                    },
                    {
                        "url": "query-dsl-type-query.html",
                        "text": "type 查询(7.0.0中废弃)",
                        "title": "type 查询(7.0.0中废弃)"
                    },
                    {
                        "url": "query-dsl-wildcard-query.html",
                        "text": "wildcard",
                        "title": "wildcard"
                    }
                ]
            },
            {
                "url": "query-dsl-minimum-should-match.html",
                "text": "<code class=\"literal\">minimum_should_match</code> 参数",
                "title": "minimum_should_match 参数"
            },
            {
                "url": "query-dsl-multi-term-rewrite.html",
                "text": "<code class=\"literal\">rewrite</code> 参数",
                "title": "rewrite 参数"
            },
            {
                "url": "regexp-syntax.html",
                "text": "正则表达式语法",
                "title": "正则表达式语法"
            }
        ]
    },
    {
        "url": "xpack-sql.html",
        "text": "SQL access（暂时不翻译)",
        "title": "SQL access",
        "sub": [
            {
                "url": "sql-overview.html",
                "text": "Overview",
                "title": "Overview"
            },
            {
                "url": "sql-getting-started.html",
                "text": "Getting Started with SQL",
                "title": "Getting Started with SQL"
            },
            {
                "url": "sql-concepts.html",
                "text": "Conventions and Terminology",
                "title": "Conventions and Terminology",
                "sub": [
                    {
                        "url": "_mapping_concepts_across_sql_and_elasticsearch.html",
                        "text": "Mapping concepts across SQL and Elasticsearch",
                        "title": "Mapping concepts across SQL and Elasticsearch"
                    }
                ]
            },
            {
                "url": "sql-security.html",
                "text": "Security",
                "title": "Security"
            },
            {
                "url": "sql-rest.html",
                "text": "SQL REST API",
                "title": "SQL REST API",
                "sub": [
                    {
                        "url": "sql-rest-overview.html",
                        "text": "Overview",
                        "title": "Overview"
                    },
                    {
                        "url": "sql-rest-format.html",
                        "text": "Response Data Formats",
                        "title": "Response Data Formats"
                    },
                    {
                        "url": "sql-pagination.html",
                        "text": "Paginating through a large response",
                        "title": "Paginating through a large response"
                    },
                    {
                        "url": "sql-rest-filtering.html",
                        "text": "Filtering using Elasticsearch query DSL",
                        "title": "Filtering using Elasticsearch query DSL"
                    },
                    {
                        "url": "sql-rest-columnar.html",
                        "text": "Columnar results",
                        "title": "Columnar results"
                    },
                    {
                        "url": "sql-rest-params.html",
                        "text": "Passing parameters to a query",
                        "title": "Passing parameters to a query"
                    },
                    {
                        "url": "sql-rest-fields.html",
                        "text": "Supported REST parameters",
                        "title": "Supported REST parameters"
                    }
                ]
            },
            {
                "url": "sql-translate.html",
                "text": "SQL Translate API",
                "title": "SQL Translate API"
            },
            {
                "url": "sql-cli.html",
                "text": "SQL CLI",
                "title": "SQL CLI"
            },
            {
                "url": "sql-jdbc.html",
                "text": "SQL JDBC",
                "title": "SQL JDBC",
                "sub": [
                    {
                        "url": "_api_usage.html",
                        "text": "API usage",
                        "title": "API usage"
                    }
                ]
            },
            {
                "url": "sql-odbc.html",
                "text": "SQL ODBC",
                "title": "SQL ODBC",
                "sub": [
                    {
                        "url": "sql-odbc-installation.html",
                        "text": "Driver installation",
                        "title": "Driver installation"
                    },
                    {
                        "url": "sql-odbc-setup.html",
                        "text": "Configuration",
                        "title": "Configuration"
                    }
                ]
            },
            {
                "url": "sql-client-apps.html",
                "text": "SQL Client Applications",
                "title": "SQL Client Applications",
                "sub": [
                    {
                        "url": "sql-client-apps-dbeaver.html",
                        "text": "DBeaver",
                        "title": "DBeaver"
                    },
                    {
                        "url": "sql-client-apps-dbvis.html",
                        "text": "DbVisualizer",
                        "title": "DbVisualizer"
                    },
                    {
                        "url": "sql-client-apps-excel.html",
                        "text": "Microsoft Excel",
                        "title": "Microsoft Excel"
                    },
                    {
                        "url": "sql-client-apps-powerbi.html",
                        "text": "Microsoft Power BI Desktop",
                        "title": "Microsoft Power BI Desktop"
                    },
                    {
                        "url": "sql-client-apps-ps1.html",
                        "text": "Microsoft PowerShell",
                        "title": "Microsoft PowerShell"
                    },
                    {
                        "url": "sql-client-apps-microstrat.html",
                        "text": "MicroStrategy Desktop",
                        "title": "MicroStrategy Desktop"
                    },
                    {
                        "url": "sql-client-apps-qlik.html",
                        "text": "Qlik Sense Desktop",
                        "title": "Qlik Sense Desktop"
                    },
                    {
                        "url": "sql-client-apps-squirrel.html",
                        "text": "SQuirreL SQL",
                        "title": "SQuirreL SQL"
                    },
                    {
                        "url": "sql-client-apps-workbench.html",
                        "text": "SQL Workbench/J",
                        "title": "SQL Workbench/J"
                    },
                    {
                        "url": "sql-client-apps-tableau.html",
                        "text": "Tableau Desktop",
                        "title": "Tableau Desktop"
                    }
                ]
            },
            {
                "url": "sql-spec.html",
                "text": "SQL Language",
                "title": "SQL Language",
                "sub": [
                    {
                        "url": "sql-lexical-structure.html",
                        "text": "Lexical Structure",
                        "title": "Lexical Structure"
                    },
                    {
                        "url": "sql-commands.html",
                        "text": "SQL Commands",
                        "title": "SQL Commands"
                    },
                    {
                        "url": "sql-syntax-describe-table.html",
                        "text": "DESCRIBE TABLE",
                        "title": "DESCRIBE TABLE"
                    },
                    {
                        "url": "sql-syntax-select.html",
                        "text": "SELECT",
                        "title": "SELECT"
                    },
                    {
                        "url": "sql-syntax-show-columns.html",
                        "text": "SHOW COLUMNS",
                        "title": "SHOW COLUMNS"
                    },
                    {
                        "url": "sql-syntax-show-functions.html",
                        "text": "SHOW FUNCTIONS",
                        "title": "SHOW FUNCTIONS"
                    },
                    {
                        "url": "sql-syntax-show-tables.html",
                        "text": "SHOW TABLES",
                        "title": "SHOW TABLES"
                    },
                    {
                        "url": "sql-data-types.html",
                        "text": "Data Types",
                        "title": "Data Types"
                    },
                    {
                        "url": "sql-index-patterns.html",
                        "text": "Index patterns",
                        "title": "Index patterns"
                    },
                    {
                        "url": "sql-index-frozen.html",
                        "text": "Frozen Indices",
                        "title": "Frozen Indices"
                    }
                ]
            },
            {
                "url": "sql-functions.html",
                "text": "Functions and Operators",
                "title": "Functions and Operators",
                "sub": [
                    {
                        "url": "sql-operators.html",
                        "text": "Comparison Operators",
                        "title": "Comparison Operators"
                    },
                    {
                        "url": "sql-operators-logical.html",
                        "text": "Logical Operators",
                        "title": "Logical Operators"
                    },
                    {
                        "url": "sql-operators-math.html",
                        "text": "Math Operators",
                        "title": "Math Operators"
                    },
                    {
                        "url": "sql-operators-cast.html",
                        "text": "Cast Operators",
                        "title": "Cast Operators"
                    },
                    {
                        "url": "sql-like-rlike-operators.html",
                        "text": "LIKE and RLIKE Operators",
                        "title": "LIKE and RLIKE Operators"
                    },
                    {
                        "url": "sql-functions-aggs.html",
                        "text": "Aggregate Functions",
                        "title": "Aggregate Functions"
                    },
                    {
                        "url": "sql-functions-grouping.html",
                        "text": "Grouping Functions",
                        "title": "Grouping Functions"
                    },
                    {
                        "url": "sql-functions-datetime.html",
                        "text": "Date/Time and Interval Functions and Operators",
                        "title": "Date/Time and Interval Functions and Operators"
                    },
                    {
                        "url": "sql-functions-search.html",
                        "text": "Full-Text Search Functions",
                        "title": "Full-Text Search Functions"
                    },
                    {
                        "url": "sql-functions-math.html",
                        "text": "Mathematical Functions",
                        "title": "Mathematical Functions"
                    },
                    {
                        "url": "sql-functions-string.html",
                        "text": "String Functions",
                        "title": "String Functions"
                    },
                    {
                        "url": "sql-functions-type-conversion.html",
                        "text": "Type Conversion Functions",
                        "title": "Type Conversion Functions"
                    },
                    {
                        "url": "sql-functions-geo.html",
                        "text": "Geo Functions",
                        "title": "Geo Functions"
                    },
                    {
                        "url": "sql-functions-conditional.html",
                        "text": "Conditional Functions And Expressions",
                        "title": "Conditional Functions And Expressions"
                    },
                    {
                        "url": "sql-functions-system.html",
                        "text": "System Functions",
                        "title": "System Functions"
                    }
                ]
            },
            {
                "url": "sql-syntax-reserved.html",
                "text": "Reserved keywords",
                "title": "Reserved keywords"
            },
            {
                "url": "sql-limitations.html",
                "text": "SQL Limitations",
                "title": "SQL Limitations"
            }
        ]
    },
    {
        "url": "search-aggregations.html",
        "text": "聚合",
        "title": "聚合",
        "sub": [
            {
                "url": "search-aggregations-metrics.html",
                "text": "指标(metric)聚合",
                "title": "指标(metric)聚合",
                "sub": [
                    {
                        "url": "search-aggregations-metrics-avg-aggregation.html",
                        "text": "avg 聚合",
                        "title": "avg 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-weight-avg-aggregation.html",
                        "text": "weighted_avg 聚合",
                        "title": "weighted_avg 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-boxplot-aggregation.html",
                        "text": "boxplot 聚合",
                        "title": "boxplot 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-cardinality-aggregation.html",
                        "text": "cardinality 聚合",
                        "title": "cardinality 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-stats-aggregation.html",
                        "text": "stats 聚合",
                        "title": "stats 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-extendedstats-aggregation.html",
                        "text": "extended_stats 聚合",
                        "title": "extended_stats 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-geobounds-aggregation.html",
                        "text": "geo_bounds 聚合",
                        "title": "geo_bounds 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-geocentroid-aggregation.html",
                        "text": "geo_centroid 聚合",
                        "title": "geo_centroid 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-max-aggregation.html",
                        "text": "max 聚合",
                        "title": "max 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-min-aggregation.html",
                        "text": "min 聚合",
                        "title": "min 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-median-absolute-deviation-aggregation.html",
                        "text": "median_absolute_deviation 聚合",
                        "title": "median_absolute_deviation 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-percentile-aggregation.html",
                        "text": "percentiles 聚合",
                        "title": "percentiles 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-percentile-rank-aggregation.html",
                        "text": "percentile_ranks 聚合",
                        "title": "percentile_ranks 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-scripted-metric-aggregation.html",
                        "text": "scripted_metric 聚合",
                        "title": "scripted_metric 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-string-stats-aggregation.html",
                        "text": "string_stats 聚合",
                        "title": "string_stats 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-sum-aggregation.html",
                        "text": "sum 聚合",
                        "title": "sum 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-top-hits-aggregation.html",
                        "text": "top_hit 聚合",
                        "title": "top_hit 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-top-metrics.html",
                        "text": "top_metrics 聚合",
                        "title": "top_metrics 聚合"
                    },
                    {
                        "url": "search-aggregations-metrics-valuecount-aggregation.html",
                        "text": "value_count 聚合",
                        "title": "value_count 聚合"
                    }
                ]
            },
            {
                "url": "search-aggregations-bucket.html",
                "text": "桶(bucket)聚合",
                "title": "桶(bucket)聚合",
                "sub": [
                    {
                        "url": "search-aggregations-bucket-adjacency-matrix-aggregation.html",
                        "text": "adjacency_matrix 聚合",
                        "title": "adjacency_matrix 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-autodatehistogram-aggregation.html",
                        "text": "auto_date_histogram 聚合",
                        "title": "auto_date_histogram 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-children-aggregation.html",
                        "text": "children 聚合",
                        "title": "children 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-composite-aggregation.html",
                        "text": "composite 聚合",
                        "title": "composite 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-datehistogram-aggregation.html",
                        "text": "date_histogram 聚合",
                        "title": "date_histogram 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-daterange-aggregation.html",
                        "text": "date_range 聚合",
                        "title": "date_range 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-diversified-sampler-aggregation.html",
                        "text": "diversified_sampler 聚合",
                        "title": "diversified_sampler 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-filter-aggregation.html",
                        "text": "filter 聚合",
                        "title": "filter 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-filters-aggregation.html",
                        "text": "filters 聚合",
                        "title": "filters 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-geodistance-aggregation.html",
                        "text": "geo_distance 聚合",
                        "title": "geo_distance 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-geohashgrid-aggregation.html",
                        "text": "geohash_grid 聚合",
                        "title": "geohash_grid 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-geotilegrid-aggregation.html",
                        "text": "geotile_grid 聚合",
                        "title": "geotile_grid 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-global-aggregation.html",
                        "text": "global 聚合",
                        "title": "global 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-histogram-aggregation.html",
                        "text": "histogram 聚合",
                        "title": "histogram 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-iprange-aggregation.html",
                        "text": "ip_range 聚合",
                        "title": "ip_range 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-missing-aggregation.html",
                        "text": "missing 聚合",
                        "title": "missing 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-nested-aggregation.html",
                        "text": "nested 聚合",
                        "title": "nested 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-parent-aggregation.html",
                        "text": "parent 聚合",
                        "title": "parent 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-range-aggregation.html",
                        "text": "range 聚合",
                        "title": "range 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-rare-terms-aggregation.html",
                        "text": "rare_terms 聚合",
                        "title": "rare_terms 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-reverse-nested-aggregation.html",
                        "text": "reverse_nested 聚合",
                        "title": "reverse_nested 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-sampler-aggregation.html",
                        "text": "sampler 聚合",
                        "title": "sampler 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-significantterms-aggregation.html",
                        "text": "significant_terms 聚合",
                        "title": "significant_terms 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-significanttext-aggregation.html",
                        "text": "significant_text 聚合",
                        "title": "significant_text 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-terms-aggregation.html",
                        "text": "terms 聚合",
                        "title": "terms 聚合"
                    },
                    {
                        "url": "search-aggregations-bucket-range-field-note.html",
                        "text": "给范围字段分桶的微妙之处",
                        "title": "给范围字段分桶的微妙之处"
                    }
                ]
            },
            {
                "url": "search-aggregations-pipeline.html",
                "text": "管道(pipeline)聚合",
                "title": "管道(pipeline)聚合",
                "sub": [
                    {
                        "url": "search-aggregations-pipeline-bucket-script-aggregation.html",
                        "text": "bucket_script 聚合",
                        "title": "bucket_script 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-bucket-selector-aggregation.html",
                        "text": "bucket_selector 聚合",
                        "title": "bucket_selector 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-bucket-sort-aggregation.html",
                        "text": "bucket_sort 聚合",
                        "title": "bucket_sort 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-avg-bucket-aggregation.html",
                        "text": "avg_bucket 聚合",
                        "title": "avg_bucket 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-max-bucket-aggregation.html",
                        "text": "max_bucket 聚合",
                        "title": "max_bucket 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-min-bucket-aggregation.html",
                        "text": "min_bucket 聚合",
                        "title": "min_bucket 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-sum-bucket-aggregation.html",
                        "text": "sum_bucket 聚合",
                        "title": "sum_bucket 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-cumulative-cardinality-aggregation.html",
                        "text": "cumulative_cardinality 聚合",
                        "title": "cumulative_cardinality 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-cumulative-sum-aggregation.html",
                        "text": "cumulative_sum 聚合",
                        "title": "cumulative_sum 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-derivative-aggregation.html",
                        "text": "derivative 聚合",
                        "title": "derivative 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-percentiles-bucket-aggregation.html",
                        "text": "percentiles_bucket 聚合",
                        "title": "percentiles_bucket 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-movavg-aggregation.html",
                        "text": "moving_avg 聚合",
                        "title": "moving_avg 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-movfn-aggregation.html",
                        "text": "moving_fn 聚合",
                        "title": "moving_fn 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-serialdiff-aggregation.html",
                        "text": "serial_diff 聚合",
                        "title": "serial_diff 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-stats-bucket-aggregation.html",
                        "text": "stats_bucket 聚合",
                        "title": "stats_bucket 聚合"
                    },
                    {
                        "url": "search-aggregations-pipeline-extended-stats-bucket-aggregation.html",
                        "text": "extended_stats_bucket 聚合",
                        "title": "extended_stats_bucket 聚合"
                    }
                ]
            },
            {
                "url": "search-aggregations-matrix.html",
                "text": "矩阵(matrix)聚合",
                "title": "矩阵(matrix)聚合",
                "sub": [
                    {
                        "url": "search-aggregations-matrix-stats-aggregation.html",
                        "text": "矩阵统计(matrix_stats)",
                        "title": "矩阵统计(matrix_stats)"
                    }
                ]
            },
            {
                "url": "caching-heavy-aggregations.html",
                "text": "重度缓存的聚合",
                "title": "重度缓存的聚合"
            },
            {
                "url": "returning-only-agg-results.html",
                "text": "只返回聚合的结果",
                "title": "只返回聚合的结果"
            },
            {
                "url": "agg-metadata.html",
                "text": "聚合元数据",
                "title": "聚合元数据"
            },
            {
                "url": "returning-aggregation-type.html",
                "text": "Returning the type of the aggregation",
                "title": "Returning the type of the aggregation"
            },
            {
                "url": "indexing-aggregation-results.html",
                "text": "Indexing aggregation results with transforms",
                "title": "Indexing aggregation results with transforms"
            }
        ]
    },
    {
        "url": "modules-scripting.html",
        "text": "Scripting",
        "title": "Scripting",
        "sub": [
            {
                "url": "modules-scripting-using.html",
                "text": "How to use scripts",
                "title": "How to use scripts"
            },
            {
                "url": "modules-scripting-fields.html",
                "text": "Accessing document fields and special variables",
                "title": "Accessing document fields and special variables"
            },
            {
                "url": "modules-scripting-security.html",
                "text": "Scripting and security",
                "title": "Scripting and security"
            },
            {
                "url": "modules-scripting-painless.html",
                "text": "Painless scripting language",
                "title": "Painless scripting language"
            },
            {
                "url": "modules-scripting-expression.html",
                "text": "Lucene expressions language",
                "title": "Lucene expressions language"
            },
            {
                "url": "modules-scripting-engine.html",
                "text": "Advanced scripts using script engines",
                "title": "Advanced scripts using script engines"
            }
        ]
    },
    {
        "url": "mapping.html",
        "text": "Mapping",
        "title": "Mapping",
        "sub": [
            {
                "url": "removal-of-types.html",
                "text": "Removal of mapping types",
                "title": "Removal of mapping types"
            },
            {
                "url": "mapping-types.html",
                "text": "Field datatypes",
                "title": "Field datatypes",
                "sub": [
                    {
                        "url": "alias.html",
                        "text": "Alias",
                        "title": "Alias"
                    },
                    {
                        "url": "array.html",
                        "text": "Arrays",
                        "title": "Arrays"
                    },
                    {
                        "url": "binary.html",
                        "text": "Binary",
                        "title": "Binary"
                    },
                    {
                        "url": "boolean.html",
                        "text": "Boolean",
                        "title": "Boolean"
                    },
                    {
                        "url": "date.html",
                        "text": "Date",
                        "title": "Date"
                    },
                    {
                        "url": "date_nanos.html",
                        "text": "Date nanoseconds",
                        "title": "Date nanoseconds"
                    },
                    {
                        "url": "dense-vector.html",
                        "text": "Dense vector",
                        "title": "Dense vector"
                    },
                    {
                        "url": "histogram.html",
                        "text": "Histogram",
                        "title": "Histogram"
                    },
                    {
                        "url": "flattened.html",
                        "text": "Flattened",
                        "title": "Flattened"
                    },
                    {
                        "url": "geo-point.html",
                        "text": "Geo-point",
                        "title": "Geo-point"
                    },
                    {
                        "url": "geo-shape.html",
                        "text": "Geo-shape",
                        "title": "Geo-shape"
                    },
                    {
                        "url": "ip.html",
                        "text": "IP",
                        "title": "IP"
                    },
                    {
                        "url": "parent-join.html",
                        "text": "Join",
                        "title": "Join"
                    },
                    {
                        "url": "keyword.html",
                        "text": "Keyword",
                        "title": "Keyword"
                    },
                    {
                        "url": "nested.html",
                        "text": "Nested",
                        "title": "Nested"
                    },
                    {
                        "url": "number.html",
                        "text": "Numeric",
                        "title": "Numeric"
                    },
                    {
                        "url": "object.html",
                        "text": "Object",
                        "title": "Object"
                    },
                    {
                        "url": "percolator.html",
                        "text": "Percolator",
                        "title": "Percolator"
                    },
                    {
                        "url": "range.html",
                        "text": "Range",
                        "title": "Range"
                    },
                    {
                        "url": "rank-feature.html",
                        "text": "Rank feature",
                        "title": "Rank feature"
                    },
                    {
                        "url": "rank-features.html",
                        "text": "Rank features",
                        "title": "Rank features"
                    },
                    {
                        "url": "search-as-you-type.html",
                        "text": "Search-as-you-type",
                        "title": "Search-as-you-type"
                    },
                    {
                        "url": "sparse-vector.html",
                        "text": "Sparse vector",
                        "title": "Sparse vector"
                    },
                    {
                        "url": "text.html",
                        "text": "Text",
                        "title": "Text"
                    },
                    {
                        "url": "token-count.html",
                        "text": "Token count",
                        "title": "Token count"
                    },
                    {
                        "url": "shape.html",
                        "text": "Shape",
                        "title": "Shape"
                    },
                    {
                        "url": "constant-keyword.html",
                        "text": "Constant keyword",
                        "title": "Constant keyword"
                    }
                ]
            },
            {
                "url": "mapping-fields.html",
                "text": "Meta-Fields",
                "title": "Meta-Fields",
                "sub": [
                    {
                        "url": "mapping-field-names-field.html",
                        "text": "<code class=\"literal\">_field_names</code> field",
                        "title": "_field_names field"
                    },
                    {
                        "url": "mapping-ignored-field.html",
                        "text": "<code class=\"literal\">_ignored</code> field",
                        "title": "_ignored field"
                    },
                    {
                        "url": "mapping-id-field.html",
                        "text": "<code class=\"literal\">_id</code> field",
                        "title": "_id field"
                    },
                    {
                        "url": "mapping-index-field.html",
                        "text": "<code class=\"literal\">_index</code> field",
                        "title": "_index field"
                    },
                    {
                        "url": "mapping-meta-field.html",
                        "text": "<code class=\"literal\">_meta</code> field",
                        "title": "_meta field"
                    },
                    {
                        "url": "mapping-routing-field.html",
                        "text": "<code class=\"literal\">_routing</code> field",
                        "title": "_routing field"
                    },
                    {
                        "url": "mapping-source-field.html",
                        "text": "<code class=\"literal\">_source</code> field",
                        "title": "_source field"
                    },
                    {
                        "url": "mapping-type-field.html",
                        "text": "<code class=\"literal\">_type</code> field",
                        "title": "_type field"
                    }
                ]
            },
            {
                "url": "mapping-params.html",
                "text": "Mapping parameters",
                "title": "Mapping parameters",
                "sub": [
                    {
                        "url": "analyzer.html",
                        "text": "<code class=\"literal\">analyzer</code>",
                        "title": "analyzer"
                    },
                    {
                        "url": "mapping-boost.html",
                        "text": "<code class=\"literal\">boost</code>",
                        "title": "boost"
                    },
                    {
                        "url": "coerce.html",
                        "text": "<code class=\"literal\">coerce</code>",
                        "title": "coerce"
                    },
                    {
                        "url": "copy-to.html",
                        "text": "<code class=\"literal\">copy_to</code>",
                        "title": "copy_to"
                    },
                    {
                        "url": "doc-values.html",
                        "text": "<code class=\"literal\">doc_values</code>",
                        "title": "doc_values"
                    },
                    {
                        "url": "dynamic.html",
                        "text": "<code class=\"literal\">dynamic</code>",
                        "title": "dynamic"
                    },
                    {
                        "url": "eager-global-ordinals.html",
                        "text": "<code class=\"literal\">eager_global_ordinals</code>",
                        "title": "eager_global_ordinals"
                    },
                    {
                        "url": "enabled.html",
                        "text": "<code class=\"literal\">enabled</code>",
                        "title": "enabled"
                    },
                    {
                        "url": "fielddata.html",
                        "text": "<code class=\"literal\">fielddata</code>",
                        "title": "fielddata"
                    },
                    {
                        "url": "mapping-date-format.html",
                        "text": "<code class=\"literal\">format</code>",
                        "title": "format"
                    },
                    {
                        "url": "ignore-above.html",
                        "text": "<code class=\"literal\">ignore_above</code>",
                        "title": "ignore_above"
                    },
                    {
                        "url": "ignore-malformed.html",
                        "text": "<code class=\"literal\">ignore_malformed</code>",
                        "title": "ignore_malformed"
                    },
                    {
                        "url": "mapping-index.html",
                        "text": "<code class=\"literal\">index</code>",
                        "title": "index"
                    },
                    {
                        "url": "index-options.html",
                        "text": "<code class=\"literal\">index_options</code>",
                        "title": "index_options"
                    },
                    {
                        "url": "index-phrases.html",
                        "text": "<code class=\"literal\">index_phrases</code>",
                        "title": "index_phrases"
                    },
                    {
                        "url": "index-prefixes.html",
                        "text": "<code class=\"literal\">index_prefixes</code>",
                        "title": "index_prefixes"
                    },
                    {
                        "url": "mapping-field-meta.html",
                        "text": "<code class=\"literal\">meta</code>",
                        "title": "meta"
                    },
                    {
                        "url": "multi-fields.html",
                        "text": "<code class=\"literal\">fields</code>",
                        "title": "fields"
                    },
                    {
                        "url": "normalizer.html",
                        "text": "<code class=\"literal\">normalizer</code>",
                        "title": "normalizer"
                    },
                    {
                        "url": "norms.html",
                        "text": "<code class=\"literal\">norms</code>",
                        "title": "norms"
                    },
                    {
                        "url": "null-value.html",
                        "text": "<code class=\"literal\">null_value</code>",
                        "title": "null_value"
                    },
                    {
                        "url": "position-increment-gap.html",
                        "text": "<code class=\"literal\">position_increment_gap</code>",
                        "title": "position_increment_gap"
                    },
                    {
                        "url": "properties.html",
                        "text": "<code class=\"literal\">properties</code>",
                        "title": "properties"
                    },
                    {
                        "url": "search-analyzer.html",
                        "text": "<code class=\"literal\">search_analyzer</code>",
                        "title": "search_analyzer"
                    },
                    {
                        "url": "similarity.html",
                        "text": "<code class=\"literal\">similarity</code>",
                        "title": "similarity"
                    },
                    {
                        "url": "mapping-store.html",
                        "text": "<code class=\"literal\">store</code>",
                        "title": "store"
                    },
                    {
                        "url": "term-vector.html",
                        "text": "<code class=\"literal\">term_vector</code>",
                        "title": "term_vector"
                    }
                ]
            },
            {
                "url": "dynamic-mapping.html",
                "text": "Dynamic Mapping",
                "title": "Dynamic Mapping",
                "sub": [
                    {
                        "url": "dynamic-field-mapping.html",
                        "text": "Dynamic field mapping",
                        "title": "Dynamic field mapping"
                    },
                    {
                        "url": "dynamic-templates.html",
                        "text": "Dynamic templates",
                        "title": "Dynamic templates"
                    }
                ]
            }
        ]
    },
    {
        "url": "analysis.html",
        "text": "Text analysis",
        "title": "Text analysis",
        "sub": [
            {
                "url": "analysis-overview.html",
                "text": "Overview",
                "title": "Overview"
            },
            {
                "url": "analysis-concepts.html",
                "text": "Concepts",
                "title": "Concepts",
                "sub": [
                    {
                        "url": "analyzer-anatomy.html",
                        "text": "Anatomy of an analyzer",
                        "title": "Anatomy of an analyzer"
                    },
                    {
                        "url": "analysis-index-search-time.html",
                        "text": "Index and search analysis",
                        "title": "Index and search analysis"
                    },
                    {
                        "url": "stemming.html",
                        "text": "Stemming",
                        "title": "Stemming"
                    },
                    {
                        "url": "token-graphs.html",
                        "text": "Token graphs",
                        "title": "Token graphs"
                    }
                ]
            },
            {
                "url": "configure-text-analysis.html",
                "text": "Configure text analysis",
                "title": "Configure text analysis",
                "sub": [
                    {
                        "url": "test-analyzer.html",
                        "text": "Test an analyzer",
                        "title": "Test an analyzer"
                    },
                    {
                        "url": "configuring-analyzers.html",
                        "text": "Configuring built-in analyzers",
                        "title": "Configuring built-in analyzers"
                    },
                    {
                        "url": "analysis-custom-analyzer.html",
                        "text": "Create a custom analyzer",
                        "title": "Create a custom analyzer"
                    },
                    {
                        "url": "specify-analyzer.html",
                        "text": "Specify an analyzer",
                        "title": "Specify an analyzer"
                    }
                ]
            },
            {
                "url": "analysis-analyzers.html",
                "text": "Built-in analyzer reference",
                "title": "Built-in analyzer reference",
                "sub": [
                    {
                        "url": "analysis-fingerprint-analyzer.html",
                        "text": "Fingerprint Analyzer",
                        "title": "Fingerprint Analyzer"
                    },
                    {
                        "url": "analysis-keyword-analyzer.html",
                        "text": "Keyword Analyzer",
                        "title": "Keyword Analyzer"
                    },
                    {
                        "url": "analysis-lang-analyzer.html",
                        "text": "Language Analyzers",
                        "title": "Language Analyzers"
                    },
                    {
                        "url": "analysis-pattern-analyzer.html",
                        "text": "Pattern Analyzer",
                        "title": "Pattern Analyzer"
                    },
                    {
                        "url": "analysis-simple-analyzer.html",
                        "text": "Simple Analyzer",
                        "title": "Simple Analyzer"
                    },
                    {
                        "url": "analysis-standard-analyzer.html",
                        "text": "Standard Analyzer",
                        "title": "Standard Analyzer"
                    },
                    {
                        "url": "analysis-stop-analyzer.html",
                        "text": "Stop Analyzer",
                        "title": "Stop Analyzer"
                    },
                    {
                        "url": "analysis-whitespace-analyzer.html",
                        "text": "Whitespace Analyzer",
                        "title": "Whitespace Analyzer"
                    }
                ]
            },
            {
                "url": "analysis-tokenizers.html",
                "text": "Tokenizer reference",
                "title": "Tokenizer reference",
                "sub": [
                    {
                        "url": "analysis-chargroup-tokenizer.html",
                        "text": "Char Group Tokenizer",
                        "title": "Char Group Tokenizer"
                    },
                    {
                        "url": "analysis-classic-tokenizer.html",
                        "text": "Classic Tokenizer",
                        "title": "Classic Tokenizer"
                    },
                    {
                        "url": "analysis-edgengram-tokenizer.html",
                        "text": "Edge n-gram tokenizer",
                        "title": "Edge n-gram tokenizer"
                    },
                    {
                        "url": "analysis-keyword-tokenizer.html",
                        "text": "Keyword Tokenizer",
                        "title": "Keyword Tokenizer"
                    },
                    {
                        "url": "analysis-letter-tokenizer.html",
                        "text": "Letter Tokenizer",
                        "title": "Letter Tokenizer"
                    },
                    {
                        "url": "analysis-lowercase-tokenizer.html",
                        "text": "Lowercase Tokenizer",
                        "title": "Lowercase Tokenizer"
                    },
                    {
                        "url": "analysis-ngram-tokenizer.html",
                        "text": "N-gram tokenizer",
                        "title": "N-gram tokenizer"
                    },
                    {
                        "url": "analysis-pathhierarchy-tokenizer.html",
                        "text": "Path Hierarchy Tokenizer",
                        "title": "Path Hierarchy Tokenizer"
                    },
                    {
                        "url": "analysis-pathhierarchy-tokenizer-examples.html",
                        "text": "Path Hierarchy Tokenizer Examples",
                        "title": "Path Hierarchy Tokenizer Examples"
                    },
                    {
                        "url": "analysis-pattern-tokenizer.html",
                        "text": "Pattern Tokenizer",
                        "title": "Pattern Tokenizer"
                    },
                    {
                        "url": "analysis-simplepattern-tokenizer.html",
                        "text": "Simple Pattern Tokenizer",
                        "title": "Simple Pattern Tokenizer"
                    },
                    {
                        "url": "analysis-simplepatternsplit-tokenizer.html",
                        "text": "Simple Pattern Split Tokenizer",
                        "title": "Simple Pattern Split Tokenizer"
                    },
                    {
                        "url": "analysis-standard-tokenizer.html",
                        "text": "Standard Tokenizer",
                        "title": "Standard Tokenizer"
                    },
                    {
                        "url": "analysis-thai-tokenizer.html",
                        "text": "Thai Tokenizer",
                        "title": "Thai Tokenizer"
                    },
                    {
                        "url": "analysis-uaxurlemail-tokenizer.html",
                        "text": "UAX URL Email  Tokenizer",
                        "title": "UAX URL Email  Tokenizer"
                    },
                    {
                        "url": "analysis-whitespace-tokenizer.html",
                        "text": "Whitespace Tokenizer",
                        "title": "Whitespace Tokenizer"
                    }
                ]
            },
            {
                "url": "analysis-tokenfilters.html",
                "text": "Token filter reference",
                "title": "Token filter reference",
                "sub": [
                    {
                        "url": "analysis-apostrophe-tokenfilter.html",
                        "text": "Apostrophe",
                        "title": "Apostrophe"
                    },
                    {
                        "url": "analysis-asciifolding-tokenfilter.html",
                        "text": "ASCII folding",
                        "title": "ASCII folding"
                    },
                    {
                        "url": "analysis-cjk-bigram-tokenfilter.html",
                        "text": "CJK bigram",
                        "title": "CJK bigram"
                    },
                    {
                        "url": "analysis-cjk-width-tokenfilter.html",
                        "text": "CJK width",
                        "title": "CJK width"
                    },
                    {
                        "url": "analysis-classic-tokenfilter.html",
                        "text": "Classic",
                        "title": "Classic"
                    },
                    {
                        "url": "analysis-common-grams-tokenfilter.html",
                        "text": "Common grams",
                        "title": "Common grams"
                    },
                    {
                        "url": "analysis-condition-tokenfilter.html",
                        "text": "Conditional",
                        "title": "Conditional"
                    },
                    {
                        "url": "analysis-decimal-digit-tokenfilter.html",
                        "text": "Decimal digit",
                        "title": "Decimal digit"
                    },
                    {
                        "url": "analysis-delimited-payload-tokenfilter.html",
                        "text": "Delimited payload",
                        "title": "Delimited payload"
                    },
                    {
                        "url": "analysis-dict-decomp-tokenfilter.html",
                        "text": "Dictionary decompounder",
                        "title": "Dictionary decompounder"
                    },
                    {
                        "url": "analysis-edgengram-tokenfilter.html",
                        "text": "Edge n-gram",
                        "title": "Edge n-gram"
                    },
                    {
                        "url": "analysis-elision-tokenfilter.html",
                        "text": "Elision",
                        "title": "Elision"
                    },
                    {
                        "url": "analysis-fingerprint-tokenfilter.html",
                        "text": "Fingerprint",
                        "title": "Fingerprint"
                    },
                    {
                        "url": "analysis-flatten-graph-tokenfilter.html",
                        "text": "Flatten graph",
                        "title": "Flatten graph"
                    },
                    {
                        "url": "analysis-hunspell-tokenfilter.html",
                        "text": "Hunspell",
                        "title": "Hunspell"
                    },
                    {
                        "url": "analysis-hyp-decomp-tokenfilter.html",
                        "text": "Hyphenation decompounder",
                        "title": "Hyphenation decompounder"
                    },
                    {
                        "url": "analysis-keep-types-tokenfilter.html",
                        "text": "Keep types",
                        "title": "Keep types"
                    },
                    {
                        "url": "analysis-keep-words-tokenfilter.html",
                        "text": "Keep words",
                        "title": "Keep words"
                    },
                    {
                        "url": "analysis-keyword-marker-tokenfilter.html",
                        "text": "Keyword marker",
                        "title": "Keyword marker"
                    },
                    {
                        "url": "analysis-keyword-repeat-tokenfilter.html",
                        "text": "Keyword repeat",
                        "title": "Keyword repeat"
                    },
                    {
                        "url": "analysis-kstem-tokenfilter.html",
                        "text": "KStem",
                        "title": "KStem"
                    },
                    {
                        "url": "analysis-length-tokenfilter.html",
                        "text": "Length",
                        "title": "Length"
                    },
                    {
                        "url": "analysis-limit-token-count-tokenfilter.html",
                        "text": "Limit token count",
                        "title": "Limit token count"
                    },
                    {
                        "url": "analysis-lowercase-tokenfilter.html",
                        "text": "Lowercase",
                        "title": "Lowercase"
                    },
                    {
                        "url": "analysis-minhash-tokenfilter.html",
                        "text": "MinHash",
                        "title": "MinHash"
                    },
                    {
                        "url": "analysis-multiplexer-tokenfilter.html",
                        "text": "Multiplexer",
                        "title": "Multiplexer"
                    },
                    {
                        "url": "analysis-ngram-tokenfilter.html",
                        "text": "N-gram",
                        "title": "N-gram"
                    },
                    {
                        "url": "analysis-normalization-tokenfilter.html",
                        "text": "Normalization",
                        "title": "Normalization"
                    },
                    {
                        "url": "analysis-pattern-capture-tokenfilter.html",
                        "text": "Pattern capture",
                        "title": "Pattern capture"
                    },
                    {
                        "url": "analysis-pattern_replace-tokenfilter.html",
                        "text": "Pattern replace",
                        "title": "Pattern replace"
                    },
                    {
                        "url": "analysis-phonetic-tokenfilter.html",
                        "text": "Phonetic",
                        "title": "Phonetic"
                    },
                    {
                        "url": "analysis-porterstem-tokenfilter.html",
                        "text": "Porter stem",
                        "title": "Porter stem"
                    },
                    {
                        "url": "analysis-predicatefilter-tokenfilter.html",
                        "text": "Predicate script",
                        "title": "Predicate script"
                    },
                    {
                        "url": "analysis-remove-duplicates-tokenfilter.html",
                        "text": "Remove duplicates",
                        "title": "Remove duplicates"
                    },
                    {
                        "url": "analysis-reverse-tokenfilter.html",
                        "text": "Reverse",
                        "title": "Reverse"
                    },
                    {
                        "url": "analysis-shingle-tokenfilter.html",
                        "text": "Shingle",
                        "title": "Shingle"
                    },
                    {
                        "url": "analysis-snowball-tokenfilter.html",
                        "text": "Snowball",
                        "title": "Snowball"
                    },
                    {
                        "url": "analysis-stemmer-tokenfilter.html",
                        "text": "Stemmer",
                        "title": "Stemmer"
                    },
                    {
                        "url": "analysis-stemmer-override-tokenfilter.html",
                        "text": "Stemmer override",
                        "title": "Stemmer override"
                    },
                    {
                        "url": "analysis-stop-tokenfilter.html",
                        "text": "Stop",
                        "title": "Stop"
                    },
                    {
                        "url": "analysis-synonym-tokenfilter.html",
                        "text": "Synonym",
                        "title": "Synonym"
                    },
                    {
                        "url": "analysis-synonym-graph-tokenfilter.html",
                        "text": "Synonym graph",
                        "title": "Synonym graph"
                    },
                    {
                        "url": "analysis-trim-tokenfilter.html",
                        "text": "Trim",
                        "title": "Trim"
                    },
                    {
                        "url": "analysis-truncate-tokenfilter.html",
                        "text": "Truncate",
                        "title": "Truncate"
                    },
                    {
                        "url": "analysis-unique-tokenfilter.html",
                        "text": "Unique",
                        "title": "Unique"
                    },
                    {
                        "url": "analysis-uppercase-tokenfilter.html",
                        "text": "Uppercase",
                        "title": "Uppercase"
                    },
                    {
                        "url": "analysis-word-delimiter-tokenfilter.html",
                        "text": "Word delimiter",
                        "title": "Word delimiter"
                    },
                    {
                        "url": "analysis-word-delimiter-graph-tokenfilter.html",
                        "text": "Word delimiter graph",
                        "title": "Word delimiter graph"
                    }
                ]
            },
            {
                "url": "analysis-charfilters.html",
                "text": "Character filters reference",
                "title": "Character filters reference",
                "sub": [
                    {
                        "url": "analysis-htmlstrip-charfilter.html",
                        "text": "HTML strip",
                        "title": "HTML strip"
                    },
                    {
                        "url": "analysis-mapping-charfilter.html",
                        "text": "Mapping",
                        "title": "Mapping"
                    },
                    {
                        "url": "analysis-pattern-replace-charfilter.html",
                        "text": "Pattern Replace Char Filter",
                        "title": "Pattern Replace Char Filter"
                    }
                ]
            },
            {
                "url": "analysis-normalizers.html",
                "text": "Normalizers",
                "title": "Normalizers"
            }
        ]
    },
    {
        "url": "index-modules.html",
        "text": "Index modules",
        "title": "Index modules",
        "sub": [
            {
                "url": "index-modules-analysis.html",
                "text": "Analysis",
                "title": "Analysis"
            },
            {
                "url": "index-modules-allocation.html",
                "text": "Index Shard Allocation",
                "title": "Index Shard Allocation",
                "sub": [
                    {
                        "url": "shard-allocation-filtering.html",
                        "text": "Index-level shard allocation filtering",
                        "title": "Index-level shard allocation filtering"
                    },
                    {
                        "url": "delayed-allocation.html",
                        "text": "Delaying allocation when a node leaves",
                        "title": "Delaying allocation when a node leaves"
                    },
                    {
                        "url": "recovery-prioritization.html",
                        "text": "Index recovery prioritization",
                        "title": "Index recovery prioritization"
                    },
                    {
                        "url": "allocation-total-shards.html",
                        "text": "Total shards per node",
                        "title": "Total shards per node"
                    }
                ]
            },
            {
                "url": "index-modules-mapper.html",
                "text": "Mapper",
                "title": "Mapper"
            },
            {
                "url": "index-modules-merge.html",
                "text": "Merge",
                "title": "Merge"
            },
            {
                "url": "index-modules-similarity.html",
                "text": "Similarity module",
                "title": "Similarity module"
            },
            {
                "url": "index-modules-slowlog.html",
                "text": "Slow Log",
                "title": "Slow Log"
            },
            {
                "url": "index-modules-store.html",
                "text": "Store",
                "title": "Store",
                "sub": [
                    {
                        "url": "preload-data-to-file-system-cache.html",
                        "text": "Preloading data into the file system cache",
                        "title": "Preloading data into the file system cache"
                    }
                ]
            },
            {
                "url": "index-modules-translog.html",
                "text": "Translog",
                "title": "Translog"
            },
            {
                "url": "index-modules-history-retention.html",
                "text": "History retention",
                "title": "History retention"
            },
            {
                "url": "index-modules-index-sorting.html",
                "text": "Index Sorting",
                "title": "Index Sorting",
                "sub": [
                    {
                        "url": "index-modules-index-sorting-conjunctions.html",
                        "text": "Use index sorting to speed up conjunctions",
                        "title": "Use index sorting to speed up conjunctions"
                    }
                ]
            }
        ]
    },
    {
        "url": "ingest.html",
        "text": "Ingest node",
        "title": "Ingest node",
        "sub": [
            {
                "url": "pipeline.html",
                "text": "Pipeline Definition",
                "title": "Pipeline Definition"
            },
            {
                "url": "accessing-data-in-pipelines.html",
                "text": "Accessing Data in Pipelines",
                "title": "Accessing Data in Pipelines"
            },
            {
                "url": "ingest-conditionals.html",
                "text": "Conditional Execution in Pipelines",
                "title": "Conditional Execution in Pipelines",
                "sub": [
                    {
                        "url": "ingest-conditional-nullcheck.html",
                        "text": "Handling Nested Fields in Conditionals",
                        "title": "Handling Nested Fields in Conditionals"
                    },
                    {
                        "url": "ingest-conditional-complex.html",
                        "text": "Complex Conditionals",
                        "title": "Complex Conditionals"
                    },
                    {
                        "url": "conditionals-with-multiple-pipelines.html",
                        "text": "Conditionals with the Pipeline Processor",
                        "title": "Conditionals with the Pipeline Processor"
                    },
                    {
                        "url": "conditionals-with-regex.html",
                        "text": "Conditionals with the Regular Expressions",
                        "title": "Conditionals with the Regular Expressions"
                    }
                ]
            },
            {
                "url": "handling-failure-in-pipelines.html",
                "text": "Handling Failures in Pipelines",
                "title": "Handling Failures in Pipelines"
            },
            {
                "url": "ingest-enriching-data.html",
                "text": "Enrich your data",
                "title": "Enrich your data",
                "sub": [
                    {
                        "url": "enrich-setup.html",
                        "text": "Set up an enrich processor",
                        "title": "Set up an enrich processor"
                    },
                    {
                        "url": "enrich-policy-definition.html",
                        "text": "Enrich policy definition",
                        "title": "Enrich policy definition"
                    },
                    {
                        "url": "geo-match-enrich-policy-type.html",
                        "text": "Example: Enrich your data based on geolocation",
                        "title": "Example: Enrich your data based on geolocation"
                    },
                    {
                        "url": "match-enrich-policy-type.html",
                        "text": "Example: Enrich your data based on exact values",
                        "title": "Example: Enrich your data based on exact values"
                    }
                ]
            },
            {
                "url": "ingest-processors.html",
                "text": "Processors",
                "title": "Processors",
                "sub": [
                    {
                        "url": "append-processor.html",
                        "text": "Append Processor",
                        "title": "Append Processor"
                    },
                    {
                        "url": "bytes-processor.html",
                        "text": "Bytes Processor",
                        "title": "Bytes Processor"
                    },
                    {
                        "url": "ingest-circle-processor.html",
                        "text": "Circle Processor",
                        "title": "Circle Processor"
                    },
                    {
                        "url": "convert-processor.html",
                        "text": "Convert Processor",
                        "title": "Convert Processor"
                    },
                    {
                        "url": "csv-processor.html",
                        "text": "CSV Processor",
                        "title": "CSV Processor"
                    },
                    {
                        "url": "date-processor.html",
                        "text": "Date Processor",
                        "title": "Date Processor"
                    },
                    {
                        "url": "date-index-name-processor.html",
                        "text": "Date Index Name Processor",
                        "title": "Date Index Name Processor"
                    },
                    {
                        "url": "dissect-processor.html",
                        "text": "Dissect Processor",
                        "title": "Dissect Processor"
                    },
                    {
                        "url": "dot-expand-processor.html",
                        "text": "Dot Expander Processor",
                        "title": "Dot Expander Processor"
                    },
                    {
                        "url": "drop-processor.html",
                        "text": "Drop Processor",
                        "title": "Drop Processor"
                    },
                    {
                        "url": "enrich-processor.html",
                        "text": "Enrich Processor",
                        "title": "Enrich Processor"
                    },
                    {
                        "url": "fail-processor.html",
                        "text": "Fail Processor",
                        "title": "Fail Processor"
                    },
                    {
                        "url": "foreach-processor.html",
                        "text": "Foreach Processor",
                        "title": "Foreach Processor"
                    },
                    {
                        "url": "geoip-processor.html",
                        "text": "GeoIP Processor",
                        "title": "GeoIP Processor"
                    },
                    {
                        "url": "grok-processor.html",
                        "text": "Grok Processor",
                        "title": "Grok Processor"
                    },
                    {
                        "url": "gsub-processor.html",
                        "text": "Gsub Processor",
                        "title": "Gsub Processor"
                    },
                    {
                        "url": "htmlstrip-processor.html",
                        "text": "HTML Strip Processor",
                        "title": "HTML Strip Processor"
                    },
                    {
                        "url": "inference-processor.html",
                        "text": "Inference Processor",
                        "title": "Inference Processor"
                    },
                    {
                        "url": "join-processor.html",
                        "text": "Join Processor",
                        "title": "Join Processor"
                    },
                    {
                        "url": "json-processor.html",
                        "text": "JSON Processor",
                        "title": "JSON Processor"
                    },
                    {
                        "url": "kv-processor.html",
                        "text": "KV Processor",
                        "title": "KV Processor"
                    },
                    {
                        "url": "lowercase-processor.html",
                        "text": "Lowercase Processor",
                        "title": "Lowercase Processor"
                    },
                    {
                        "url": "pipeline-processor.html",
                        "text": "Pipeline Processor",
                        "title": "Pipeline Processor"
                    },
                    {
                        "url": "remove-processor.html",
                        "text": "Remove Processor",
                        "title": "Remove Processor"
                    },
                    {
                        "url": "rename-processor.html",
                        "text": "Rename Processor",
                        "title": "Rename Processor"
                    },
                    {
                        "url": "script-processor.html",
                        "text": "Script Processor",
                        "title": "Script Processor"
                    },
                    {
                        "url": "set-processor.html",
                        "text": "Set Processor",
                        "title": "Set Processor"
                    },
                    {
                        "url": "ingest-node-set-security-user-processor.html",
                        "text": "Set Security User Processor",
                        "title": "Set Security User Processor"
                    },
                    {
                        "url": "split-processor.html",
                        "text": "Split Processor",
                        "title": "Split Processor"
                    },
                    {
                        "url": "sort-processor.html",
                        "text": "Sort Processor",
                        "title": "Sort Processor"
                    },
                    {
                        "url": "trim-processor.html",
                        "text": "Trim Processor",
                        "title": "Trim Processor"
                    },
                    {
                        "url": "uppercase-processor.html",
                        "text": "Uppercase Processor",
                        "title": "Uppercase Processor"
                    },
                    {
                        "url": "urldecode-processor.html",
                        "text": "URL Decode Processor",
                        "title": "URL Decode Processor"
                    },
                    {
                        "url": "user-agent-processor.html",
                        "text": "User Agent processor",
                        "title": "User Agent processor"
                    }
                ]
            }
        ]
    },
    {
        "url": "index-lifecycle-management.html",
        "text": "ILM: Manage the index lifecycle",
        "title": "ILM: Manage the index lifecycle",
        "sub": [
            {
                "url": "overview-index-lifecycle-management.html",
                "text": "Overview",
                "title": "Overview"
            },
            {
                "url": "ilm-concepts.html",
                "text": "Concepts",
                "title": "Concepts",
                "sub": [
                    {
                        "url": "ilm-index-lifecycle.html",
                        "text": "Index lifecycle",
                        "title": "Index lifecycle"
                    },
                    {
                        "url": "index-rollover.html",
                        "text": "Rollover",
                        "title": "Rollover"
                    },
                    {
                        "url": "update-lifecycle-policy.html",
                        "text": "Policy updates",
                        "title": "Policy updates"
                    }
                ]
            },
            {
                "url": "getting-started-index-lifecycle-management.html",
                "text": "Automate rollover",
                "title": "Automate rollover"
            },
            {
                "url": "ilm-actions.html",
                "text": "Index lifecycle actions",
                "title": "Index lifecycle actions",
                "sub": [
                    {
                        "url": "ilm-allocate.html",
                        "text": "Allocate",
                        "title": "Allocate"
                    },
                    {
                        "url": "ilm-delete.html",
                        "text": "Delete",
                        "title": "Delete"
                    },
                    {
                        "url": "ilm-forcemerge.html",
                        "text": "Force merge",
                        "title": "Force merge"
                    },
                    {
                        "url": "ilm-freeze.html",
                        "text": "Freeze",
                        "title": "Freeze"
                    },
                    {
                        "url": "ilm-readonly.html",
                        "text": "Read only",
                        "title": "Read only"
                    },
                    {
                        "url": "ilm-rollover.html",
                        "text": "Rollover",
                        "title": "Rollover"
                    },
                    {
                        "url": "ilm-set-priority.html",
                        "text": "Set priority",
                        "title": "Set priority"
                    },
                    {
                        "url": "ilm-shrink.html",
                        "text": "Shrink",
                        "title": "Shrink"
                    },
                    {
                        "url": "ilm-unfollow.html",
                        "text": "Unfollow",
                        "title": "Unfollow"
                    },
                    {
                        "url": "ilm-wait-for-snapshot.html",
                        "text": "Wait for snapshot",
                        "title": "Wait for snapshot"
                    }
                ]
            },
            {
                "url": "set-up-lifecycle-policy.html",
                "text": "Configure a lifecycle policy ",
                "title": "Configure a lifecycle policy "
            },
            {
                "url": "index-lifecycle-error-handling.html",
                "text": "Resolve lifecycle policy execution errors",
                "title": "Resolve lifecycle policy execution errors"
            },
            {
                "url": "start-stop-ilm.html",
                "text": "Start and stop index lifecycle management",
                "title": "Start and stop index lifecycle management"
            },
            {
                "url": "ilm-with-existing-indices.html",
                "text": "Manage existing indices",
                "title": "Manage existing indices"
            },
            {
                "url": "skipping-rollover.html",
                "text": "Skip rollover",
                "title": "Skip rollover"
            },
            {
                "url": "index-lifecycle-and-snapshots.html",
                "text": "Restore a managed index",
                "title": "Restore a managed index"
            }
        ]
    },
    {
        "url": "monitor-elasticsearch-cluster.html",
        "text": "Monitor a cluster",
        "title": "Monitor a cluster",
        "sub": [
            {
                "url": "monitoring-overview.html",
                "text": "Overview",
                "title": "Overview"
            },
            {
                "url": "how-monitoring-works.html",
                "text": "How it works",
                "title": "How it works"
            },
            {
                "url": "monitoring-production.html",
                "text": "Monitoring in a production environment",
                "title": "Monitoring in a production environment"
            },
            {
                "url": "configuring-metricbeat.html",
                "text": "Collecting monitoring data with Metricbeat",
                "title": "Collecting monitoring data with Metricbeat"
            },
            {
                "url": "configuring-filebeat.html",
                "text": "Collecting log data with Filebeat",
                "title": "Collecting log data with Filebeat"
            },
            {
                "url": "config-monitoring-indices.html",
                "text": "Configuring indices for monitoring",
                "title": "Configuring indices for monitoring"
            },
            {
                "url": "collecting-monitoring-data.html",
                "text": "Legacy collection methods",
                "title": "Legacy collection methods",
                "sub": [
                    {
                        "url": "es-monitoring-collectors.html",
                        "text": "Collectors",
                        "title": "Collectors"
                    },
                    {
                        "url": "es-monitoring-exporters.html",
                        "text": "Exporters",
                        "title": "Exporters"
                    },
                    {
                        "url": "local-exporter.html",
                        "text": "Local exporters",
                        "title": "Local exporters"
                    },
                    {
                        "url": "http-exporter.html",
                        "text": "HTTP exporters",
                        "title": "HTTP exporters"
                    },
                    {
                        "url": "pause-export.html",
                        "text": "Pausing data collection",
                        "title": "Pausing data collection"
                    }
                ]
            },
            {
                "url": "monitoring-troubleshooting.html",
                "text": "Troubleshooting",
                "title": "Troubleshooting"
            }
        ]
    },
    {
        "url": "frozen-indices.html",
        "text": "Frozen indices",
        "title": "Frozen indices",
        "sub": [
            {
                "url": "best_practices.html",
                "text": "Best practices",
                "title": "Best practices"
            },
            {
                "url": "searching_a_frozen_index.html",
                "text": "Searching a frozen index",
                "title": "Searching a frozen index"
            },
            {
                "url": "monitoring_frozen_indices.html",
                "text": "Monitoring frozen indices",
                "title": "Monitoring frozen indices"
            }
        ]
    },
    {
        "url": "data-rollup-transform.html",
        "text": "Roll up or transform your data",
        "title": "Roll up or transform your data",
        "sub": [
            {
                "url": "xpack-rollup.html",
                "text": "Rolling up historical data",
                "title": "Rolling up historical data",
                "sub": [
                    {
                        "url": "rollup-overview.html",
                        "text": "Overview",
                        "title": "Overview"
                    },
                    {
                        "url": "rollup-api-quickref.html",
                        "text": "API quick reference",
                        "title": "API quick reference"
                    },
                    {
                        "url": "rollup-getting-started.html",
                        "text": "Getting started",
                        "title": "Getting started"
                    },
                    {
                        "url": "rollup-understanding-groups.html",
                        "text": "Understanding groups",
                        "title": "Understanding groups"
                    },
                    {
                        "url": "rollup-agg-limitations.html",
                        "text": "Rollup aggregation limitations",
                        "title": "Rollup aggregation limitations"
                    },
                    {
                        "url": "rollup-search-limitations.html",
                        "text": "Rollup search limitations",
                        "title": "Rollup search limitations"
                    }
                ]
            },
            {
                "url": "transforms.html",
                "text": "Transforming data",
                "title": "Transforming data",
                "sub": [
                    {
                        "url": "transform-overview.html",
                        "text": "Overview",
                        "title": "Overview"
                    },
                    {
                        "url": "transform-setup.html",
                        "text": "Setup",
                        "title": "Setup"
                    },
                    {
                        "url": "transform-usage.html",
                        "text": "When to use transforms",
                        "title": "When to use transforms"
                    },
                    {
                        "url": "transform-checkpoints.html",
                        "text": "How checkpoints work",
                        "title": "How checkpoints work"
                    },
                    {
                        "url": "transform-api-quickref.html",
                        "text": "API quick reference",
                        "title": "API quick reference"
                    },
                    {
                        "url": "ecommerce-transforms.html",
                        "text": "Tutorial: Transforming the eCommerce sample data",
                        "title": "Tutorial: Transforming the eCommerce sample data"
                    },
                    {
                        "url": "transform-examples.html",
                        "text": "Examples",
                        "title": "Examples"
                    },
                    {
                        "url": "transform-painless-examples.html",
                        "text": "Painless examples for transforms",
                        "title": "Painless examples for transforms"
                    },
                    {
                        "url": "transform-troubleshooting.html",
                        "text": "Troubleshooting",
                        "title": "Troubleshooting"
                    },
                    {
                        "url": "transform-limitations.html",
                        "text": "Limitations",
                        "title": "Limitations"
                    }
                ]
            }
        ]
    },
    {
        "url": "high-availability.html",
        "text": "Set up a cluster for high availability",
        "title": "Set up a cluster for high availability",
        "sub": [
            {
                "url": "high-availability-cluster-design.html",
                "text": "Designing for resilience",
                "title": "Designing for resilience",
                "sub": [
                    {
                        "url": "high-availability-cluster-small-clusters.html",
                        "text": "Resilience in small clusters",
                        "title": "Resilience in small clusters"
                    },
                    {
                        "url": "high-availability-cluster-design-large-clusters.html",
                        "text": "Resilience in larger clusters",
                        "title": "Resilience in larger clusters"
                    }
                ]
            },
            {
                "url": "backup-cluster.html",
                "text": "Back up a cluster",
                "title": "Back up a cluster",
                "sub": [
                    {
                        "url": "backup-cluster-data.html",
                        "text": "Back up the data",
                        "title": "Back up the data"
                    },
                    {
                        "url": "backup-cluster-configuration.html",
                        "text": "Back up the cluster configuration",
                        "title": "Back up the cluster configuration"
                    },
                    {
                        "url": "security-backup.html",
                        "text": "Back up the security configuration",
                        "title": "Back up the security configuration"
                    },
                    {
                        "url": "restore-security-configuration.html",
                        "text": "Restore the security configuration",
                        "title": "Restore the security configuration"
                    },
                    {
                        "url": "restore-cluster-data.html",
                        "text": "Restore the data",
                        "title": "Restore the data"
                    }
                ]
            },
            {
                "url": "xpack-ccr.html",
                "text": "Cross-cluster replication",
                "title": "Cross-cluster replication",
                "sub": [
                    {
                        "url": "ccr-overview.html",
                        "text": "Overview",
                        "title": "Overview"
                    },
                    {
                        "url": "ccr-requirements.html",
                        "text": "Requirements for leader indices",
                        "title": "Requirements for leader indices"
                    },
                    {
                        "url": "ccr-auto-follow.html",
                        "text": "Automatically following indices",
                        "title": "Automatically following indices"
                    },
                    {
                        "url": "ccr-getting-started.html",
                        "text": "Getting started with cross-cluster replication",
                        "title": "Getting started with cross-cluster replication"
                    },
                    {
                        "url": "remote-recovery.html",
                        "text": "Remote recovery",
                        "title": "Remote recovery"
                    },
                    {
                        "url": "ccr-upgrading.html",
                        "text": "Upgrading clusters",
                        "title": "Upgrading clusters"
                    }
                ]
            }
        ]
    },
    {
        "url": "snapshot-restore.html",
        "text": "Snapshot and restore",
        "title": "Snapshot and restore",
        "sub": [
            {
                "url": "snapshots-register-repository.html",
                "text": "Register repository",
                "title": "Register repository"
            },
            {
                "url": "snapshots-take-snapshot.html",
                "text": "Take a snapshot",
                "title": "Take a snapshot"
            },
            {
                "url": "snapshots-restore-snapshot.html",
                "text": "Restore a snapshot",
                "title": "Restore a snapshot"
            },
            {
                "url": "snapshots-monitor-snapshot-restore.html",
                "text": "Monitor snapshot and restore",
                "title": "Monitor snapshot and restore"
            },
            {
                "url": "snapshot-lifecycle-management.html",
                "text": "SLM: Manage the snapshot lifecycle",
                "title": "SLM: Manage the snapshot lifecycle",
                "sub": [
                    {
                        "url": "getting-started-snapshot-lifecycle-management.html",
                        "text": "Tutorial: Automate backups with SLM",
                        "title": "Tutorial: Automate backups with SLM"
                    },
                    {
                        "url": "slm-and-security.html",
                        "text": "Security and SLM",
                        "title": "Security and SLM"
                    },
                    {
                        "url": "slm-retention.html",
                        "text": "Snapshot retention",
                        "title": "Snapshot retention"
                    }
                ]
            }
        ]
    },
    {
        "url": "secure-cluster.html",
        "text": "Secure a cluster",
        "title": "Secure a cluster",
        "sub": [
            {
                "url": "elasticsearch-security.html",
                "text": "Overview",
                "title": "Overview"
            },
            {
                "url": "configuring-security.html",
                "text": "Configuring security",
                "title": "Configuring security",
                "sub": [
                    {
                        "url": "separating-node-client-traffic.html",
                        "text": "Separating node-to-node and client traffic",
                        "title": "Separating node-to-node and client traffic"
                    },
                    {
                        "url": "security-files.html",
                        "text": "Security files",
                        "title": "Security files"
                    },
                    {
                        "url": "fips-140-compliance.html",
                        "text": "FIPS 140-2",
                        "title": "FIPS 140-2"
                    }
                ]
            },
            {
                "url": "setting-up-authentication.html",
                "text": "User authentication",
                "title": "User authentication",
                "sub": [
                    {
                        "url": "built-in-users.html",
                        "text": "Built-in users",
                        "title": "Built-in users"
                    },
                    {
                        "url": "internal-users.html",
                        "text": "Internal users",
                        "title": "Internal users"
                    },
                    {
                        "url": "token-authentication-services.html",
                        "text": "Token-based authentication services",
                        "title": "Token-based authentication services"
                    },
                    {
                        "url": "realms.html",
                        "text": "Realms",
                        "title": "Realms"
                    },
                    {
                        "url": "realm-chains.html",
                        "text": "Realm chains",
                        "title": "Realm chains"
                    },
                    {
                        "url": "active-directory-realm.html",
                        "text": "Active Directory user authentication",
                        "title": "Active Directory user authentication"
                    },
                    {
                        "url": "file-realm.html",
                        "text": "File-based user authentication",
                        "title": "File-based user authentication"
                    },
                    {
                        "url": "ldap-realm.html",
                        "text": "LDAP user authentication",
                        "title": "LDAP user authentication"
                    },
                    {
                        "url": "native-realm.html",
                        "text": "Native user authentication",
                        "title": "Native user authentication"
                    },
                    {
                        "url": "oidc-realm.html",
                        "text": "OpenID Connect authentication",
                        "title": "OpenID Connect authentication"
                    },
                    {
                        "url": "pki-realm.html",
                        "text": "PKI user authentication",
                        "title": "PKI user authentication"
                    },
                    {
                        "url": "saml-realm.html",
                        "text": "SAML authentication",
                        "title": "SAML authentication"
                    },
                    {
                        "url": "kerberos-realm.html",
                        "text": "Kerberos authentication",
                        "title": "Kerberos authentication"
                    },
                    {
                        "url": "custom-realms.html",
                        "text": "Integrating with other authentication systems",
                        "title": "Integrating with other authentication systems"
                    },
                    {
                        "url": "anonymous-access.html",
                        "text": "Enabling anonymous access",
                        "title": "Enabling anonymous access"
                    },
                    {
                        "url": "controlling-user-cache.html",
                        "text": "Controlling the user cache",
                        "title": "Controlling the user cache"
                    }
                ]
            },
            {
                "url": "saml-guide.html",
                "text": "Configuring SAML single-sign-on on the Elastic Stack",
                "title": "Configuring SAML single-sign-on on the Elastic Stack",
                "sub": [
                    {
                        "url": "saml-guide-idp.html",
                        "text": "The identity provider",
                        "title": "The identity provider"
                    },
                    {
                        "url": "saml-guide-authentication.html",
                        "text": "Configure Elasticsearch for SAML authentication",
                        "title": "Configure Elasticsearch for SAML authentication"
                    },
                    {
                        "url": "saml-sp-metadata.html",
                        "text": "Generating SP metadata",
                        "title": "Generating SP metadata"
                    },
                    {
                        "url": "saml-role-mapping.html",
                        "text": "Configuring role mappings",
                        "title": "Configuring role mappings"
                    },
                    {
                        "url": "saml-user-metadata.html",
                        "text": "User metadata",
                        "title": "User metadata"
                    },
                    {
                        "url": "saml-kibana.html",
                        "text": "Configuring Kibana",
                        "title": "Configuring Kibana"
                    },
                    {
                        "url": "saml-troubleshooting.html",
                        "text": "Troubleshooting SAML Realm Configuration",
                        "title": "Troubleshooting SAML Realm Configuration"
                    },
                    {
                        "url": "saml-no-kibana.html",
                        "text": "SAML without Kibana",
                        "title": "SAML without Kibana"
                    }
                ]
            },
            {
                "url": "oidc-guide.html",
                "text": "Configuring single sign-on to the Elastic Stack using OpenID Connect",
                "title": "Configuring single sign-on to the Elastic Stack using OpenID Connect",
                "sub": [
                    {
                        "url": "oidc-guide-op.html",
                        "text": "The OpenID Connect Provider",
                        "title": "The OpenID Connect Provider"
                    },
                    {
                        "url": "oidc-guide-authentication.html",
                        "text": "Configure Elasticsearch for OpenID Connect authentication",
                        "title": "Configure Elasticsearch for OpenID Connect authentication"
                    },
                    {
                        "url": "oidc-role-mapping.html",
                        "text": "Configuring role mappings",
                        "title": "Configuring role mappings"
                    },
                    {
                        "url": "oidc-user-metadata.html",
                        "text": "User metadata",
                        "title": "User metadata"
                    },
                    {
                        "url": "oidc-kibana.html",
                        "text": "Configuring Kibana",
                        "title": "Configuring Kibana"
                    },
                    {
                        "url": "oidc-without-kibana.html",
                        "text": "OpenID Connect without Kibana",
                        "title": "OpenID Connect without Kibana"
                    }
                ]
            },
            {
                "url": "authorization.html",
                "text": "User authorization",
                "title": "User authorization",
                "sub": [
                    {
                        "url": "built-in-roles.html",
                        "text": "Built-in roles",
                        "title": "Built-in roles"
                    },
                    {
                        "url": "defining-roles.html",
                        "text": "Defining roles",
                        "title": "Defining roles"
                    },
                    {
                        "url": "security-privileges.html",
                        "text": "Security privileges",
                        "title": "Security privileges"
                    },
                    {
                        "url": "document-level-security.html",
                        "text": "Document level security",
                        "title": "Document level security"
                    },
                    {
                        "url": "field-level-security.html",
                        "text": "Field level security",
                        "title": "Field level security"
                    },
                    {
                        "url": "securing-aliases.html",
                        "text": "Granting privileges for indices and aliases",
                        "title": "Granting privileges for indices and aliases"
                    },
                    {
                        "url": "mapping-roles.html",
                        "text": "Mapping users and groups to roles",
                        "title": "Mapping users and groups to roles"
                    },
                    {
                        "url": "field-and-document-access-control.html",
                        "text": "Setting up field and document level security",
                        "title": "Setting up field and document level security"
                    },
                    {
                        "url": "run-as-privilege.html",
                        "text": "Submitting requests on behalf of other users",
                        "title": "Submitting requests on behalf of other users"
                    },
                    {
                        "url": "configuring-authorization-delegation.html",
                        "text": "Configuring authorization delegation",
                        "title": "Configuring authorization delegation"
                    },
                    {
                        "url": "custom-roles-authorization.html",
                        "text": "Customizing roles and authorization",
                        "title": "Customizing roles and authorization"
                    }
                ]
            },
            {
                "url": "enable-audit-logging.html",
                "text": "Enabling audit logging",
                "title": "Enabling audit logging",
                "sub": [
                    {
                        "url": "audit-event-types.html",
                        "text": "Audit event types",
                        "title": "Audit event types"
                    },
                    {
                        "url": "audit-log-output.html",
                        "text": "Logfile audit output",
                        "title": "Logfile audit output"
                    },
                    {
                        "url": "auditing-search-queries.html",
                        "text": "Auditing search queries",
                        "title": "Auditing search queries"
                    }
                ]
            },
            {
                "url": "encrypting-communications.html",
                "text": "Encrypting communications",
                "title": "Encrypting communications",
                "sub": [
                    {
                        "url": "ssl-tls.html",
                        "text": "Setting up TLS on a cluster",
                        "title": "Setting up TLS on a cluster"
                    },
                    {
                        "url": "configuring-tls.html",
                        "text": "Encrypting communications in Elasticsearch",
                        "title": "Encrypting communications in Elasticsearch"
                    },
                    {
                        "url": "configuring-tls-docker.html",
                        "text": "Encrypting communications in an Elasticsearch Docker Container",
                        "title": "Encrypting communications in an Elasticsearch Docker Container"
                    },
                    {
                        "url": "ciphers.html",
                        "text": "Enabling cipher suites for stronger encryption",
                        "title": "Enabling cipher suites for stronger encryption"
                    }
                ]
            },
            {
                "url": "ip-filtering.html",
                "text": "Restricting connections with IP filtering",
                "title": "Restricting connections with IP filtering"
            },
            {
                "url": "ccs-clients-integrations.html",
                "text": "Cross cluster search, clients, and integrations",
                "title": "Cross cluster search, clients, and integrations",
                "sub": [
                    {
                        "url": "cross-cluster-configuring.html",
                        "text": "Cross cluster search and security",
                        "title": "Cross cluster search and security"
                    },
                    {
                        "url": "java-clients.html",
                        "text": "Java Client and security",
                        "title": "Java Client and security"
                    },
                    {
                        "url": "http-clients.html",
                        "text": "HTTP/REST clients and security",
                        "title": "HTTP/REST clients and security"
                    },
                    {
                        "url": "hadoop.html",
                        "text": "ES-Hadoop and Security",
                        "title": "ES-Hadoop and Security"
                    },
                    {
                        "url": "secure-monitoring.html",
                        "text": "Monitoring and security",
                        "title": "Monitoring and security"
                    }
                ]
            },
            {
                "url": "security-getting-started.html",
                "text": "Tutorial: Getting started with security",
                "title": "Tutorial: Getting started with security",
                "sub": [
                    {
                        "url": "get-started-enable-security.html",
                        "text": "Enable Elasticsearch security features",
                        "title": "Enable Elasticsearch security features"
                    },
                    {
                        "url": "get-started-built-in-users.html",
                        "text": "Create passwords for built-in users",
                        "title": "Create passwords for built-in users"
                    },
                    {
                        "url": "get-started-kibana-user.html",
                        "text": "Add the built-in user to Kibana",
                        "title": "Add the built-in user to Kibana"
                    },
                    {
                        "url": "get-started-authentication.html",
                        "text": "Configure authentication",
                        "title": "Configure authentication"
                    },
                    {
                        "url": "get-started-users.html",
                        "text": "Create users",
                        "title": "Create users"
                    },
                    {
                        "url": "get-started-roles.html",
                        "text": "Assign roles",
                        "title": "Assign roles"
                    },
                    {
                        "url": "get-started-logstash-user.html",
                        "text": "Add user information in Logstash",
                        "title": "Add user information in Logstash"
                    },
                    {
                        "url": "get-started-verify-users.html",
                        "text": "View system metrics in Kibana",
                        "title": "View system metrics in Kibana"
                    }
                ]
            },
            {
                "url": "encrypting-internode-communications.html",
                "text": "Tutorial: Encrypting communications",
                "title": "Tutorial: Encrypting communications",
                "sub": [
                    {
                        "url": "encrypting-communications-certificates.html",
                        "text": "Generate certificates",
                        "title": "Generate certificates"
                    },
                    {
                        "url": "encrypting-internode.html",
                        "text": "Encrypt internode communications",
                        "title": "Encrypt internode communications"
                    },
                    {
                        "url": "encrypting-communications-hosts.html",
                        "text": "Add nodes to your cluster",
                        "title": "Add nodes to your cluster"
                    }
                ]
            },
            {
                "url": "security-troubleshooting.html",
                "text": "Troubleshooting",
                "title": "Troubleshooting",
                "sub": [
                    {
                        "url": "security-trb-settings.html",
                        "text": "Some settings are not returned via the nodes settings API",
                        "title": "Some settings are not returned via the nodes settings API"
                    },
                    {
                        "url": "security-trb-roles.html",
                        "text": "Authorization exceptions",
                        "title": "Authorization exceptions"
                    },
                    {
                        "url": "security-trb-extraargs.html",
                        "text": "Users command fails due to extra arguments",
                        "title": "Users command fails due to extra arguments"
                    },
                    {
                        "url": "trouble-shoot-active-directory.html",
                        "text": "Users are frequently locked out of Active Directory",
                        "title": "Users are frequently locked out of Active Directory"
                    },
                    {
                        "url": "trb-security-maccurl.html",
                        "text": "Certificate verification fails for curl on Mac",
                        "title": "Certificate verification fails for curl on Mac"
                    },
                    {
                        "url": "trb-security-sslhandshake.html",
                        "text": "SSLHandshakeException causes connections to fail",
                        "title": "SSLHandshakeException causes connections to fail"
                    },
                    {
                        "url": "trb-security-ssl.html",
                        "text": "Common SSL/TLS exceptions",
                        "title": "Common SSL/TLS exceptions"
                    },
                    {
                        "url": "trb-security-kerberos.html",
                        "text": "Common Kerberos exceptions",
                        "title": "Common Kerberos exceptions"
                    },
                    {
                        "url": "trb-security-saml.html",
                        "text": "Common SAML issues",
                        "title": "Common SAML issues"
                    },
                    {
                        "url": "trb-security-internalserver.html",
                        "text": "Internal Server Error in Kibana",
                        "title": "Internal Server Error in Kibana"
                    },
                    {
                        "url": "trb-security-setup.html",
                        "text": "Setup-passwords command fails due to connection failure",
                        "title": "Setup-passwords command fails due to connection failure"
                    },
                    {
                        "url": "trb-security-path.html",
                        "text": "Failures due to relocation of the configuration files",
                        "title": "Failures due to relocation of the configuration files"
                    }
                ]
            },
            {
                "url": "security-limitations.html",
                "text": "Limitations",
                "title": "Limitations"
            }
        ]
    },
    {
        "url": "xpack-alerting.html",
        "text": "Alerting on cluster and index events",
        "title": "Alerting on cluster and index events",
        "sub": [
            {
                "url": "watcher-getting-started.html",
                "text": "Getting started with Watcher",
                "title": "Getting started with Watcher"
            },
            {
                "url": "how-watcher-works.html",
                "text": "How Watcher works",
                "title": "How Watcher works"
            },
            {
                "url": "encrypting-data.html",
                "text": "Encrypting sensitive data in Watcher",
                "title": "Encrypting sensitive data in Watcher"
            },
            {
                "url": "input.html",
                "text": "Inputs",
                "title": "Inputs",
                "sub": [
                    {
                        "url": "input-simple.html",
                        "text": "Simple input",
                        "title": "Simple input"
                    },
                    {
                        "url": "input-search.html",
                        "text": "Search input",
                        "title": "Search input"
                    },
                    {
                        "url": "input-http.html",
                        "text": "HTTP input",
                        "title": "HTTP input"
                    },
                    {
                        "url": "input-chain.html",
                        "text": "Chain input",
                        "title": "Chain input"
                    }
                ]
            },
            {
                "url": "trigger.html",
                "text": "Triggers",
                "title": "Triggers",
                "sub": [
                    {
                        "url": "trigger-schedule.html",
                        "text": "Schedule trigger",
                        "title": "Schedule trigger"
                    }
                ]
            },
            {
                "url": "condition.html",
                "text": "Conditions",
                "title": "Conditions",
                "sub": [
                    {
                        "url": "condition-always.html",
                        "text": "Always condition",
                        "title": "Always condition"
                    },
                    {
                        "url": "condition-never.html",
                        "text": "Never condition",
                        "title": "Never condition"
                    },
                    {
                        "url": "condition-compare.html",
                        "text": "Compare condition",
                        "title": "Compare condition"
                    },
                    {
                        "url": "condition-array-compare.html",
                        "text": "Array compare condition",
                        "title": "Array compare condition"
                    },
                    {
                        "url": "condition-script.html",
                        "text": "Script condition",
                        "title": "Script condition"
                    }
                ]
            },
            {
                "url": "actions.html",
                "text": "Actions",
                "title": "Actions",
                "sub": [
                    {
                        "url": "action-foreach.html",
                        "text": "Running an action for each element in an array",
                        "title": "Running an action for each element in an array"
                    },
                    {
                        "url": "action-conditions.html",
                        "text": "Adding conditions to actions",
                        "title": "Adding conditions to actions"
                    },
                    {
                        "url": "actions-email.html",
                        "text": "Email action",
                        "title": "Email action"
                    },
                    {
                        "url": "actions-webhook.html",
                        "text": "Webhook action",
                        "title": "Webhook action"
                    },
                    {
                        "url": "actions-index.html",
                        "text": "Index action",
                        "title": "Index action"
                    },
                    {
                        "url": "actions-logging.html",
                        "text": "Logging Action",
                        "title": "Logging Action"
                    },
                    {
                        "url": "actions-slack.html",
                        "text": "Slack Action",
                        "title": "Slack Action"
                    },
                    {
                        "url": "actions-pagerduty.html",
                        "text": "PagerDuty action",
                        "title": "PagerDuty action"
                    },
                    {
                        "url": "actions-jira.html",
                        "text": "Jira action",
                        "title": "Jira action"
                    }
                ]
            },
            {
                "url": "transform.html",
                "text": "Payload transforms",
                "title": "Payload transforms",
                "sub": [
                    {
                        "url": "transform-search.html",
                        "text": "Search payload transform",
                        "title": "Search payload transform"
                    },
                    {
                        "url": "transform-script.html",
                        "text": "Script payload transform",
                        "title": "Script payload transform"
                    },
                    {
                        "url": "transform-chain.html",
                        "text": "Chain payload transform",
                        "title": "Chain payload transform"
                    }
                ]
            },
            {
                "url": "api-java.html",
                "text": "Java API",
                "title": "Java API"
            },
            {
                "url": "managing-watches.html",
                "text": "Managing watches",
                "title": "Managing watches"
            },
            {
                "url": "example-watches.html",
                "text": "Example watches",
                "title": "Example watches",
                "sub": [
                    {
                        "url": "watch-cluster-status.html",
                        "text": "Watching the status of an Elasticsearch cluster",
                        "title": "Watching the status of an Elasticsearch cluster"
                    },
                    {
                        "url": "watching-meetup-data.html",
                        "text": "Watching event data",
                        "title": "Watching event data"
                    }
                ]
            },
            {
                "url": "watcher-troubleshooting.html",
                "text": "Troubleshooting",
                "title": "Troubleshooting"
            },
            {
                "url": "watcher-limitations.html",
                "text": "Limitations",
                "title": "Limitations"
            }
        ]
    },
    {
        "url": "commands.html",
        "text": "Command line tools",
        "title": "Command line tools",
        "sub": [
            {
                "url": "certgen.html",
                "text": "elasticsearch-certgen",
                "title": "elasticsearch-certgen"
            },
            {
                "url": "certutil.html",
                "text": "elasticsearch-certutil",
                "title": "elasticsearch-certutil"
            },
            {
                "url": "elasticsearch-croneval.html",
                "text": "elasticsearch-croneval",
                "title": "elasticsearch-croneval",
                "sub": [
                    {
                        "url": "_parameters_8.html",
                        "text": "Parameters",
                        "title": "Parameters"
                    }
                ]
            },
            {
                "url": "elasticsearch-keystore.html",
                "text": "elasticsearch-keystore",
                "title": "elasticsearch-keystore"
            },
            {
                "url": "migrate-tool.html",
                "text": "elasticsearch-migrate",
                "title": "elasticsearch-migrate"
            },
            {
                "url": "node-tool.html",
                "text": "elasticsearch-node",
                "title": "elasticsearch-node"
            },
            {
                "url": "saml-metadata.html",
                "text": "elasticsearch-saml-metadata",
                "title": "elasticsearch-saml-metadata"
            },
            {
                "url": "setup-passwords.html",
                "text": "elasticsearch-setup-passwords",
                "title": "elasticsearch-setup-passwords"
            },
            {
                "url": "shard-tool.html",
                "text": "elasticsearch-shard",
                "title": "elasticsearch-shard"
            },
            {
                "url": "syskeygen.html",
                "text": "elasticsearch-syskeygen",
                "title": "elasticsearch-syskeygen"
            },
            {
                "url": "users-command.html",
                "text": "elasticsearch-users",
                "title": "elasticsearch-users"
            }
        ]
    },
    {
        "url": "how-to.html",
        "text": "How To",
        "title": "How To",
        "sub": [
            {
                "url": "general-recommendations.html",
                "text": "General recommendations",
                "title": "General recommendations"
            },
            {
                "url": "recipes.html",
                "text": "Recipes",
                "title": "Recipes",
                "sub": [
                    {
                        "url": "mixing-exact-search-with-stemming.html",
                        "text": "Mixing exact search with stemming",
                        "title": "Mixing exact search with stemming"
                    },
                    {
                        "url": "consistent-scoring.html",
                        "text": "Getting consistent scoring",
                        "title": "Getting consistent scoring"
                    },
                    {
                        "url": "static-scoring-signals.html",
                        "text": "Incorporating static relevance signals into the score",
                        "title": "Incorporating static relevance signals into the score"
                    }
                ]
            },
            {
                "url": "tune-for-indexing-speed.html",
                "text": "Tune for indexing speed",
                "title": "Tune for indexing speed"
            },
            {
                "url": "tune-for-search-speed.html",
                "text": "Tune for search speed",
                "title": "Tune for search speed",
                "sub": [
                    {
                        "url": "_tune_your_queries_with_the_profile_api.html",
                        "text": "Tune your queries with the Profile API",
                        "title": "Tune your queries with the Profile API"
                    },
                    {
                        "url": "faster-phrase-queries.html",
                        "text": "Faster phrase queries with <code class=\"literal\">index_phrases</code>",
                        "title": "Faster phrase queries with <code class=\"literal\">index_phrases</code>"
                    },
                    {
                        "url": "faster-prefix-queries.html",
                        "text": "Faster prefix queries with <code class=\"literal\">index_prefixes</code>",
                        "title": "Faster prefix queries with <code class=\"literal\">index_prefixes</code>"
                    },
                    {
                        "url": "faster-filtering-with-constant-keyword.html",
                        "text": "Use ",
                        "title": "Use "
                    }
                ]
            },
            {
                "url": "tune-for-disk-usage.html",
                "text": "Tune for disk usage",
                "title": "Tune for disk usage"
            },
            {
                "url": "avoid-oversharding.html",
                "text": "Avoid oversharding",
                "title": "Avoid oversharding"
            }
        ]
    },
    {
        "url": "glossary.html",
        "text": "Glossary of terms",
        "title": "Glossary of terms"
    },
    {
        "url": "rest-apis.html",
        "text": "REST APIs",
        "title": "REST APIs",
        "sub": [
            {
                "url": "api-conventions.html",
                "text": "API conventions",
                "title": "API conventions",
                "sub": [
                    {
                        "url": "multi-index.html",
                        "text": "Multiple indices",
                        "title": "Multiple indices"
                    },
                    {
                        "url": "date-math-index-names.html",
                        "text": "Date math support in index names",
                        "title": "Date math support in index names"
                    },
                    {
                        "url": "cron-expressions.html",
                        "text": "Cron expressions",
                        "title": "Cron expressions"
                    },
                    {
                        "url": "common-options.html",
                        "text": "Common options",
                        "title": "Common options"
                    },
                    {
                        "url": "url-access-control.html",
                        "text": "URL-based access control",
                        "title": "URL-based access control"
                    }
                ]
            },
            {
                "url": "cat.html",
                "text": "cat APIs",
                "title": "cat APIs",
                "sub": [
                    {
                        "url": "cat-alias.html",
                        "text": "cat aliases",
                        "title": "cat aliases"
                    },
                    {
                        "url": "cat-allocation.html",
                        "text": "cat allocation",
                        "title": "cat allocation"
                    },
                    {
                        "url": "cat-anomaly-detectors.html",
                        "text": "cat anomaly detectors",
                        "title": "cat anomaly detectors"
                    },
                    {
                        "url": "cat-count.html",
                        "text": "cat count",
                        "title": "cat count"
                    },
                    {
                        "url": "cat-dfanalytics.html",
                        "text": "cat data frame analytics",
                        "title": "cat data frame analytics"
                    },
                    {
                        "url": "cat-datafeeds.html",
                        "text": "cat datafeeds",
                        "title": "cat datafeeds"
                    },
                    {
                        "url": "cat-fielddata.html",
                        "text": "cat fielddata",
                        "title": "cat fielddata"
                    },
                    {
                        "url": "cat-health.html",
                        "text": "cat health",
                        "title": "cat health"
                    },
                    {
                        "url": "cat-indices.html",
                        "text": "cat indices",
                        "title": "cat indices"
                    },
                    {
                        "url": "cat-master.html",
                        "text": "cat master",
                        "title": "cat master"
                    },
                    {
                        "url": "cat-nodeattrs.html",
                        "text": "cat nodeattrs",
                        "title": "cat nodeattrs"
                    },
                    {
                        "url": "cat-nodes.html",
                        "text": "cat nodes",
                        "title": "cat nodes"
                    },
                    {
                        "url": "cat-pending-tasks.html",
                        "text": "cat pending tasks",
                        "title": "cat pending tasks"
                    },
                    {
                        "url": "cat-plugins.html",
                        "text": "cat plugins",
                        "title": "cat plugins"
                    },
                    {
                        "url": "cat-recovery.html",
                        "text": "cat recovery",
                        "title": "cat recovery"
                    },
                    {
                        "url": "cat-repositories.html",
                        "text": "cat repositories",
                        "title": "cat repositories"
                    },
                    {
                        "url": "cat-shards.html",
                        "text": "cat shards",
                        "title": "cat shards"
                    },
                    {
                        "url": "cat-segments.html",
                        "text": "cat segments",
                        "title": "cat segments"
                    },
                    {
                        "url": "cat-snapshots.html",
                        "text": "cat snapshots",
                        "title": "cat snapshots"
                    },
                    {
                        "url": "cat-tasks.html",
                        "text": "cat task management",
                        "title": "cat task management"
                    },
                    {
                        "url": "cat-templates.html",
                        "text": "cat templates",
                        "title": "cat templates"
                    },
                    {
                        "url": "cat-thread-pool.html",
                        "text": "cat thread pool",
                        "title": "cat thread pool"
                    },
                    {
                        "url": "cat-trained-model.html",
                        "text": "cat trained model",
                        "title": "cat trained model"
                    },
                    {
                        "url": "cat-transforms.html",
                        "text": "cat transforms",
                        "title": "cat transforms"
                    }
                ]
            },
            {
                "url": "cluster.html",
                "text": "Cluster APIs",
                "title": "Cluster APIs",
                "sub": [
                    {
                        "url": "cluster-allocation-explain.html",
                        "text": "Cluster allocation explain",
                        "title": "Cluster allocation explain"
                    },
                    {
                        "url": "cluster-get-settings.html",
                        "text": "Cluster get settings",
                        "title": "Cluster get settings"
                    },
                    {
                        "url": "cluster-health.html",
                        "text": "Cluster health",
                        "title": "Cluster health"
                    },
                    {
                        "url": "cluster-reroute.html",
                        "text": "Cluster reroute",
                        "title": "Cluster reroute"
                    },
                    {
                        "url": "cluster-state.html",
                        "text": "Cluster state",
                        "title": "Cluster state"
                    },
                    {
                        "url": "cluster-stats.html",
                        "text": "Cluster stats",
                        "title": "Cluster stats"
                    },
                    {
                        "url": "cluster-update-settings.html",
                        "text": "Cluster update settings",
                        "title": "Cluster update settings"
                    },
                    {
                        "url": "cluster-nodes-usage.html",
                        "text": "Nodes feature usage",
                        "title": "Nodes feature usage"
                    },
                    {
                        "url": "cluster-nodes-hot-threads.html",
                        "text": "Nodes hot threads",
                        "title": "Nodes hot threads"
                    },
                    {
                        "url": "cluster-nodes-info.html",
                        "text": "Nodes info",
                        "title": "Nodes info"
                    },
                    {
                        "url": "cluster-nodes-reload-secure-settings.html",
                        "text": "Nodes reload secure settings",
                        "title": "Nodes reload secure settings"
                    },
                    {
                        "url": "cluster-nodes-stats.html",
                        "text": "Nodes stats",
                        "title": "Nodes stats"
                    },
                    {
                        "url": "cluster-pending.html",
                        "text": "Pending cluster tasks",
                        "title": "Pending cluster tasks"
                    },
                    {
                        "url": "cluster-remote-info.html",
                        "text": "Remote cluster info",
                        "title": "Remote cluster info"
                    },
                    {
                        "url": "tasks.html",
                        "text": "Task management",
                        "title": "Task management"
                    },
                    {
                        "url": "voting-config-exclusions.html",
                        "text": "Voting configuration exclusions",
                        "title": "Voting configuration exclusions"
                    }
                ]
            },
            {
                "url": "ccr-apis.html",
                "text": "Cross-cluster replication APIs",
                "title": "Cross-cluster replication APIs",
                "sub": [
                    {
                        "url": "ccr-get-stats.html",
                        "text": "Get CCR stats",
                        "title": "Get CCR stats"
                    },
                    {
                        "url": "ccr-put-follow.html",
                        "text": "Create follower",
                        "title": "Create follower"
                    },
                    {
                        "url": "ccr-post-pause-follow.html",
                        "text": "Pause follower",
                        "title": "Pause follower"
                    },
                    {
                        "url": "ccr-post-resume-follow.html",
                        "text": "Resume follower",
                        "title": "Resume follower"
                    },
                    {
                        "url": "ccr-post-unfollow.html",
                        "text": "Unfollow",
                        "title": "Unfollow"
                    },
                    {
                        "url": "ccr-post-forget-follower.html",
                        "text": "Forget follower",
                        "title": "Forget follower"
                    },
                    {
                        "url": "ccr-get-follow-stats.html",
                        "text": "Get follower stats",
                        "title": "Get follower stats"
                    },
                    {
                        "url": "ccr-get-follow-info.html",
                        "text": "Get follower info",
                        "title": "Get follower info"
                    },
                    {
                        "url": "ccr-put-auto-follow-pattern.html",
                        "text": "Create auto-follow pattern",
                        "title": "Create auto-follow pattern"
                    },
                    {
                        "url": "ccr-delete-auto-follow-pattern.html",
                        "text": "Delete auto-follow pattern",
                        "title": "Delete auto-follow pattern"
                    },
                    {
                        "url": "ccr-get-auto-follow-pattern.html",
                        "text": "Get auto-follow pattern",
                        "title": "Get auto-follow pattern"
                    },
                    {
                        "url": "ccr-pause-auto-follow-pattern.html",
                        "text": "Pause auto-follow pattern",
                        "title": "Pause auto-follow pattern"
                    },
                    {
                        "url": "ccr-resume-auto-follow-pattern.html",
                        "text": "Resume auto-follow pattern",
                        "title": "Resume auto-follow pattern"
                    }
                ]
            },
            {
                "url": "docs.html",
                "text": "Document APIs",
                "title": "Document APIs",
                "sub": [
                    {
                        "url": "docs-replication.html",
                        "text": "Reading and Writing documents",
                        "title": "Reading and Writing documents"
                    },
                    {
                        "url": "docs-index_.html",
                        "text": "Index",
                        "title": "Index"
                    },
                    {
                        "url": "docs-get.html",
                        "text": "Get",
                        "title": "Get"
                    },
                    {
                        "url": "docs-delete.html",
                        "text": "Delete",
                        "title": "Delete"
                    },
                    {
                        "url": "docs-delete-by-query.html",
                        "text": "Delete by query",
                        "title": "Delete by query"
                    },
                    {
                        "url": "docs-update.html",
                        "text": "Update",
                        "title": "Update"
                    },
                    {
                        "url": "docs-update-by-query.html",
                        "text": "Update by query API",
                        "title": "Update by query API"
                    },
                    {
                        "url": "docs-multi-get.html",
                        "text": "Multi get",
                        "title": "Multi get"
                    },
                    {
                        "url": "docs-bulk.html",
                        "text": "Bulk",
                        "title": "Bulk"
                    },
                    {
                        "url": "docs-reindex.html",
                        "text": "Reindex",
                        "title": "Reindex"
                    },
                    {
                        "url": "docs-termvectors.html",
                        "text": "Term vectors",
                        "title": "Term vectors"
                    },
                    {
                        "url": "docs-multi-termvectors.html",
                        "text": "Multi term vectors",
                        "title": "Multi term vectors"
                    },
                    {
                        "url": "docs-refresh.html",
                        "text": "<code class=\"literal\">?refresh</code>",
                        "title": "?refresh"
                    },
                    {
                        "url": "optimistic-concurrency-control.html",
                        "text": "Optimistic concurrency control",
                        "title": "Optimistic concurrency control"
                    }
                ]
            },
            {
                "url": "enrich-apis.html",
                "text": "Enrich APIs",
                "title": "Enrich APIs",
                "sub": [
                    {
                        "url": "put-enrich-policy-api.html",
                        "text": "Put enrich policy",
                        "title": "Put enrich policy"
                    },
                    {
                        "url": "delete-enrich-policy-api.html",
                        "text": "Delete enrich policy",
                        "title": "Delete enrich policy"
                    },
                    {
                        "url": "get-enrich-policy-api.html",
                        "text": "Get enrich policy",
                        "title": "Get enrich policy"
                    },
                    {
                        "url": "execute-enrich-policy-api.html",
                        "text": "Execute enrich policy",
                        "title": "Execute enrich policy"
                    },
                    {
                        "url": "enrich-stats-api.html",
                        "text": "Enrich stats",
                        "title": "Enrich stats"
                    }
                ]
            },
            {
                "url": "graph-explore-api.html",
                "text": "Explore API",
                "title": "Explore API"
            },
            {
                "url": "indices.html",
                "text": "Index APIs",
                "title": "Index APIs",
                "sub": [
                    {
                        "url": "indices-add-alias.html",
                        "text": "Add index alias",
                        "title": "Add index alias"
                    },
                    {
                        "url": "indices-analyze.html",
                        "text": "Analyze",
                        "title": "Analyze"
                    },
                    {
                        "url": "indices-clearcache.html",
                        "text": "Clear cache",
                        "title": "Clear cache"
                    },
                    {
                        "url": "indices-clone-index.html",
                        "text": "Clone index",
                        "title": "Clone index"
                    },
                    {
                        "url": "indices-close.html",
                        "text": "Close index",
                        "title": "Close index"
                    },
                    {
                        "url": "indices-create-index.html",
                        "text": "Create index",
                        "title": "Create index"
                    },
                    {
                        "url": "indices-delete-index.html",
                        "text": "Delete index",
                        "title": "Delete index"
                    },
                    {
                        "url": "indices-delete-alias.html",
                        "text": "Delete index alias",
                        "title": "Delete index alias"
                    },
                    {
                        "url": "indices-delete-template.html",
                        "text": "Delete index template",
                        "title": "Delete index template"
                    },
                    {
                        "url": "indices-flush.html",
                        "text": "Flush",
                        "title": "Flush"
                    },
                    {
                        "url": "indices-forcemerge.html",
                        "text": "Force merge",
                        "title": "Force merge"
                    },
                    {
                        "url": "freeze-index-api.html",
                        "text": "Freeze index",
                        "title": "Freeze index"
                    },
                    {
                        "url": "indices-get-field-mapping.html",
                        "text": "Get field mapping",
                        "title": "Get field mapping"
                    },
                    {
                        "url": "indices-get-index.html",
                        "text": "Get index",
                        "title": "Get index"
                    },
                    {
                        "url": "indices-get-alias.html",
                        "text": "Get index alias",
                        "title": "Get index alias"
                    },
                    {
                        "url": "indices-get-settings.html",
                        "text": "Get index settings",
                        "title": "Get index settings"
                    },
                    {
                        "url": "indices-get-template.html",
                        "text": "Get index template",
                        "title": "Get index template"
                    },
                    {
                        "url": "indices-get-mapping.html",
                        "text": "Get mapping",
                        "title": "Get mapping"
                    },
                    {
                        "url": "indices-alias-exists.html",
                        "text": "Index alias exists",
                        "title": "Index alias exists"
                    },
                    {
                        "url": "indices-exists.html",
                        "text": "Index exists",
                        "title": "Index exists"
                    },
                    {
                        "url": "indices-recovery.html",
                        "text": "Index recovery",
                        "title": "Index recovery"
                    },
                    {
                        "url": "indices-segments.html",
                        "text": "Index segments",
                        "title": "Index segments"
                    },
                    {
                        "url": "indices-shards-stores.html",
                        "text": "Index shard stores",
                        "title": "Index shard stores"
                    },
                    {
                        "url": "indices-stats.html",
                        "text": "Index stats",
                        "title": "Index stats"
                    },
                    {
                        "url": "indices-template-exists.html",
                        "text": "Index template exists",
                        "title": "Index template exists"
                    },
                    {
                        "url": "indices-open-close.html",
                        "text": "Open index",
                        "title": "Open index"
                    },
                    {
                        "url": "indices-templates.html",
                        "text": "Put index template",
                        "title": "Put index template"
                    },
                    {
                        "url": "indices-put-mapping.html",
                        "text": "Put mapping",
                        "title": "Put mapping"
                    },
                    {
                        "url": "indices-refresh.html",
                        "text": "Refresh",
                        "title": "Refresh"
                    },
                    {
                        "url": "indices-rollover-index.html",
                        "text": "Rollover index",
                        "title": "Rollover index"
                    },
                    {
                        "url": "indices-shrink-index.html",
                        "text": "Shrink index",
                        "title": "Shrink index"
                    },
                    {
                        "url": "indices-split-index.html",
                        "text": "Split index",
                        "title": "Split index"
                    },
                    {
                        "url": "indices-synced-flush-api.html",
                        "text": "Synced flush",
                        "title": "Synced flush"
                    },
                    {
                        "url": "indices-types-exists.html",
                        "text": "Type exists",
                        "title": "Type exists"
                    },
                    {
                        "url": "unfreeze-index-api.html",
                        "text": "Unfreeze index",
                        "title": "Unfreeze index"
                    },
                    {
                        "url": "indices-aliases.html",
                        "text": "Update index alias",
                        "title": "Update index alias"
                    },
                    {
                        "url": "indices-update-settings.html",
                        "text": "Update index settings",
                        "title": "Update index settings"
                    }
                ]
            },
            {
                "url": "index-lifecycle-management-api.html",
                "text": "Index lifecycle management API",
                "title": "Index lifecycle management API",
                "sub": [
                    {
                        "url": "ilm-put-lifecycle.html",
                        "text": "Create policy",
                        "title": "Create policy"
                    },
                    {
                        "url": "ilm-get-lifecycle.html",
                        "text": "Get policy",
                        "title": "Get policy"
                    },
                    {
                        "url": "ilm-delete-lifecycle.html",
                        "text": "Delete policy",
                        "title": "Delete policy"
                    },
                    {
                        "url": "ilm-move-to-step.html",
                        "text": "Move to step",
                        "title": "Move to step"
                    },
                    {
                        "url": "ilm-remove-policy.html",
                        "text": "Remove policy",
                        "title": "Remove policy"
                    },
                    {
                        "url": "ilm-retry-policy.html",
                        "text": "Retry policy",
                        "title": "Retry policy"
                    },
                    {
                        "url": "ilm-get-status.html",
                        "text": "Get index lifecycle management status",
                        "title": "Get index lifecycle management status"
                    },
                    {
                        "url": "ilm-explain-lifecycle.html",
                        "text": "Explain lifecycle",
                        "title": "Explain lifecycle"
                    },
                    {
                        "url": "ilm-start.html",
                        "text": "Start index lifecycle management",
                        "title": "Start index lifecycle management"
                    },
                    {
                        "url": "ilm-stop.html",
                        "text": "Stop index lifecycle management",
                        "title": "Stop index lifecycle management"
                    }
                ]
            },
            {
                "url": "ingest-apis.html",
                "text": "Ingest APIs",
                "title": "Ingest APIs",
                "sub": [
                    {
                        "url": "put-pipeline-api.html",
                        "text": "Put pipeline",
                        "title": "Put pipeline"
                    },
                    {
                        "url": "get-pipeline-api.html",
                        "text": "Get pipeline",
                        "title": "Get pipeline"
                    },
                    {
                        "url": "delete-pipeline-api.html",
                        "text": "Delete pipeline",
                        "title": "Delete pipeline"
                    },
                    {
                        "url": "simulate-pipeline-api.html",
                        "text": "Simulate pipeline",
                        "title": "Simulate pipeline"
                    }
                ]
            },
            {
                "url": "info-api.html",
                "text": "Info API",
                "title": "Info API"
            },
            {
                "url": "licensing-apis.html",
                "text": "Licensing APIs",
                "title": "Licensing APIs",
                "sub": [
                    {
                        "url": "delete-license.html",
                        "text": "Delete license",
                        "title": "Delete license"
                    },
                    {
                        "url": "get-license.html",
                        "text": "Get license",
                        "title": "Get license"
                    },
                    {
                        "url": "get-trial-status.html",
                        "text": "Get trial status",
                        "title": "Get trial status"
                    },
                    {
                        "url": "start-trial.html",
                        "text": "Start trial",
                        "title": "Start trial"
                    },
                    {
                        "url": "get-basic-status.html",
                        "text": "Get basic status",
                        "title": "Get basic status"
                    },
                    {
                        "url": "start-basic.html",
                        "text": "Start basic",
                        "title": "Start basic"
                    },
                    {
                        "url": "update-license.html",
                        "text": "Update license",
                        "title": "Update license"
                    }
                ]
            },
            {
                "url": "ml-apis.html",
                "text": "Machine learning anomaly detection APIs",
                "title": "Machine learning anomaly detection APIs",
                "sub": [
                    {
                        "url": "ml-post-calendar-event.html",
                        "text": "Add events to calendar",
                        "title": "Add events to calendar"
                    },
                    {
                        "url": "ml-put-calendar-job.html",
                        "text": "Add jobs to calendar",
                        "title": "Add jobs to calendar"
                    },
                    {
                        "url": "ml-close-job.html",
                        "text": "Close jobs",
                        "title": "Close jobs"
                    },
                    {
                        "url": "ml-put-job.html",
                        "text": "Create jobs",
                        "title": "Create jobs"
                    },
                    {
                        "url": "ml-put-calendar.html",
                        "text": "Create calendar",
                        "title": "Create calendar"
                    },
                    {
                        "url": "ml-put-datafeed.html",
                        "text": "Create datafeeds",
                        "title": "Create datafeeds"
                    },
                    {
                        "url": "ml-put-filter.html",
                        "text": "Create filter",
                        "title": "Create filter"
                    },
                    {
                        "url": "ml-delete-calendar.html",
                        "text": "Delete calendar",
                        "title": "Delete calendar"
                    },
                    {
                        "url": "ml-delete-datafeed.html",
                        "text": "Delete datafeeds",
                        "title": "Delete datafeeds"
                    },
                    {
                        "url": "ml-delete-calendar-event.html",
                        "text": "Delete events from calendar",
                        "title": "Delete events from calendar"
                    },
                    {
                        "url": "ml-delete-filter.html",
                        "text": "Delete filter",
                        "title": "Delete filter"
                    },
                    {
                        "url": "ml-delete-forecast.html",
                        "text": "Delete forecast",
                        "title": "Delete forecast"
                    },
                    {
                        "url": "ml-delete-job.html",
                        "text": "Delete jobs",
                        "title": "Delete jobs"
                    },
                    {
                        "url": "ml-delete-calendar-job.html",
                        "text": "Delete jobs from calendar",
                        "title": "Delete jobs from calendar"
                    },
                    {
                        "url": "ml-delete-snapshot.html",
                        "text": "Delete model snapshots",
                        "title": "Delete model snapshots"
                    },
                    {
                        "url": "ml-delete-expired-data.html",
                        "text": "Delete expired data",
                        "title": "Delete expired data"
                    },
                    {
                        "url": "ml-estimate-model-memory.html",
                        "text": "Estimate model memory",
                        "title": "Estimate model memory"
                    },
                    {
                        "url": "ml-find-file-structure.html",
                        "text": "Find file structure",
                        "title": "Find file structure"
                    },
                    {
                        "url": "ml-flush-job.html",
                        "text": "Flush jobs",
                        "title": "Flush jobs"
                    },
                    {
                        "url": "ml-forecast.html",
                        "text": "Forecast jobs",
                        "title": "Forecast jobs"
                    },
                    {
                        "url": "ml-get-bucket.html",
                        "text": "Get buckets",
                        "title": "Get buckets"
                    },
                    {
                        "url": "ml-get-calendar.html",
                        "text": "Get calendars",
                        "title": "Get calendars"
                    },
                    {
                        "url": "ml-get-category.html",
                        "text": "Get categories",
                        "title": "Get categories"
                    },
                    {
                        "url": "ml-get-datafeed.html",
                        "text": "Get datafeeds",
                        "title": "Get datafeeds"
                    },
                    {
                        "url": "ml-get-datafeed-stats.html",
                        "text": "Get datafeed statistics",
                        "title": "Get datafeed statistics"
                    },
                    {
                        "url": "ml-get-influencer.html",
                        "text": "Get influencers",
                        "title": "Get influencers"
                    },
                    {
                        "url": "ml-get-job.html",
                        "text": "Get jobs",
                        "title": "Get jobs"
                    },
                    {
                        "url": "ml-get-job-stats.html",
                        "text": "Get job statistics",
                        "title": "Get job statistics"
                    },
                    {
                        "url": "get-ml-info.html",
                        "text": "Get machine learning info",
                        "title": "Get machine learning info"
                    },
                    {
                        "url": "ml-get-snapshot.html",
                        "text": "Get model snapshots",
                        "title": "Get model snapshots"
                    },
                    {
                        "url": "ml-get-overall-buckets.html",
                        "text": "Get overall buckets",
                        "title": "Get overall buckets"
                    },
                    {
                        "url": "ml-get-calendar-event.html",
                        "text": "Get scheduled events",
                        "title": "Get scheduled events"
                    },
                    {
                        "url": "ml-get-filter.html",
                        "text": "Get filters",
                        "title": "Get filters"
                    },
                    {
                        "url": "ml-get-record.html",
                        "text": "Get records",
                        "title": "Get records"
                    },
                    {
                        "url": "ml-open-job.html",
                        "text": "Open jobs",
                        "title": "Open jobs"
                    },
                    {
                        "url": "ml-post-data.html",
                        "text": "Post data to jobs",
                        "title": "Post data to jobs"
                    },
                    {
                        "url": "ml-preview-datafeed.html",
                        "text": "Preview datafeeds",
                        "title": "Preview datafeeds"
                    },
                    {
                        "url": "ml-revert-snapshot.html",
                        "text": "Revert model snapshots",
                        "title": "Revert model snapshots"
                    },
                    {
                        "url": "ml-set-upgrade-mode.html",
                        "text": "Set upgrade mode",
                        "title": "Set upgrade mode"
                    },
                    {
                        "url": "ml-start-datafeed.html",
                        "text": "Start datafeeds",
                        "title": "Start datafeeds"
                    },
                    {
                        "url": "ml-stop-datafeed.html",
                        "text": "Stop datafeeds",
                        "title": "Stop datafeeds"
                    },
                    {
                        "url": "ml-update-datafeed.html",
                        "text": "Update datafeeds",
                        "title": "Update datafeeds"
                    },
                    {
                        "url": "ml-update-filter.html",
                        "text": "Update filter",
                        "title": "Update filter"
                    },
                    {
                        "url": "ml-update-job.html",
                        "text": "Update jobs",
                        "title": "Update jobs"
                    },
                    {
                        "url": "ml-update-snapshot.html",
                        "text": "Update model snapshots",
                        "title": "Update model snapshots"
                    }
                ]
            },
            {
                "url": "ml-df-analytics-apis.html",
                "text": "Machine learning data frame analytics APIs",
                "title": "Machine learning data frame analytics APIs",
                "sub": [
                    {
                        "url": "put-dfanalytics.html",
                        "text": "Create data frame analytics jobs",
                        "title": "Create data frame analytics jobs"
                    },
                    {
                        "url": "put-inference.html",
                        "text": "Create inference trained model",
                        "title": "Create inference trained model"
                    },
                    {
                        "url": "delete-dfanalytics.html",
                        "text": "Delete data frame analytics jobs",
                        "title": "Delete data frame analytics jobs"
                    },
                    {
                        "url": "delete-inference.html",
                        "text": "Delete inference trained model",
                        "title": "Delete inference trained model"
                    },
                    {
                        "url": "evaluate-dfanalytics.html",
                        "text": "Evaluate data frame analytics",
                        "title": "Evaluate data frame analytics"
                    },
                    {
                        "url": "explain-dfanalytics.html",
                        "text": "Explain data frame analytics API",
                        "title": "Explain data frame analytics API"
                    },
                    {
                        "url": "get-dfanalytics.html",
                        "text": "Get data frame analytics jobs",
                        "title": "Get data frame analytics jobs"
                    },
                    {
                        "url": "get-dfanalytics-stats.html",
                        "text": "Get data frame analytics jobs stats",
                        "title": "Get data frame analytics jobs stats"
                    },
                    {
                        "url": "get-inference.html",
                        "text": "Get inference trained model",
                        "title": "Get inference trained model"
                    },
                    {
                        "url": "get-inference-stats.html",
                        "text": "Get inference trained model stats",
                        "title": "Get inference trained model stats"
                    },
                    {
                        "url": "start-dfanalytics.html",
                        "text": "Start data frame analytics jobs",
                        "title": "Start data frame analytics jobs"
                    },
                    {
                        "url": "stop-dfanalytics.html",
                        "text": "Stop data frame analytics jobs",
                        "title": "Stop data frame analytics jobs"
                    }
                ]
            },
            {
                "url": "migration-api.html",
                "text": "Migration APIs",
                "title": "Migration APIs",
                "sub": [
                    {
                        "url": "migration-api-deprecation.html",
                        "text": "Deprecation info",
                        "title": "Deprecation info"
                    }
                ]
            },
            {
                "url": "indices-reload-analyzers.html",
                "text": "Reload search analyzers",
                "title": "Reload search analyzers"
            },
            {
                "url": "rollup-apis.html",
                "text": "Rollup APIs",
                "title": "Rollup APIs",
                "sub": [
                    {
                        "url": "rollup-put-job.html",
                        "text": "Create rollup jobs",
                        "title": "Create rollup jobs"
                    },
                    {
                        "url": "rollup-delete-job.html",
                        "text": "Delete rollup jobs",
                        "title": "Delete rollup jobs"
                    },
                    {
                        "url": "rollup-get-job.html",
                        "text": "Get job",
                        "title": "Get job"
                    },
                    {
                        "url": "rollup-get-rollup-caps.html",
                        "text": "Get rollup caps",
                        "title": "Get rollup caps"
                    },
                    {
                        "url": "rollup-get-rollup-index-caps.html",
                        "text": "Get rollup index caps",
                        "title": "Get rollup index caps"
                    },
                    {
                        "url": "rollup-search.html",
                        "text": "Rollup search",
                        "title": "Rollup search"
                    },
                    {
                        "url": "rollup-start-job.html",
                        "text": "Start rollup jobs",
                        "title": "Start rollup jobs"
                    },
                    {
                        "url": "rollup-stop-job.html",
                        "text": "Stop rollup jobs",
                        "title": "Stop rollup jobs"
                    }
                ]
            },
            {
                "url": "search.html",
                "text": "Search APIs",
                "title": "Search APIs",
                "sub": [
                    {
                        "url": "search-search.html",
                        "text": "Search",
                        "title": "Search"
                    },
                    {
                        "url": "search-request-body.html",
                        "text": "Request Body Search",
                        "title": "Request Body Search"
                    },
                    {
                        "url": "async-search.html",
                        "text": "Async search",
                        "title": "Async search"
                    },
                    {
                        "url": "scroll-api.html",
                        "text": "Scroll",
                        "title": "Scroll"
                    },
                    {
                        "url": "clear-scroll-api.html",
                        "text": "Clear scroll",
                        "title": "Clear scroll"
                    },
                    {
                        "url": "search-template.html",
                        "text": "Search Template",
                        "title": "Search Template"
                    },
                    {
                        "url": "multi-search-template.html",
                        "text": "Multi Search Template",
                        "title": "Multi Search Template"
                    },
                    {
                        "url": "search-shards.html",
                        "text": "Search Shards API",
                        "title": "Search Shards API"
                    },
                    {
                        "url": "search-suggesters.html",
                        "text": "Suggesters",
                        "title": "Suggesters"
                    },
                    {
                        "url": "search-multi-search.html",
                        "text": "Multi Search API",
                        "title": "Multi Search API"
                    },
                    {
                        "url": "search-count.html",
                        "text": "Count API",
                        "title": "Count API"
                    },
                    {
                        "url": "search-validate.html",
                        "text": "Validate API",
                        "title": "Validate API"
                    },
                    {
                        "url": "search-explain.html",
                        "text": "Explain API",
                        "title": "Explain API"
                    },
                    {
                        "url": "search-profile.html",
                        "text": "Profile API",
                        "title": "Profile API"
                    },
                    {
                        "url": "search-field-caps.html",
                        "text": "Field Capabilities API",
                        "title": "Field Capabilities API"
                    },
                    {
                        "url": "search-rank-eval.html",
                        "text": "Ranking Evaluation API",
                        "title": "Ranking Evaluation API"
                    }
                ]
            },
            {
                "url": "security-api.html",
                "text": "Security APIs",
                "title": "Security APIs",
                "sub": [
                    {
                        "url": "security-api-authenticate.html",
                        "text": "Authenticate",
                        "title": "Authenticate"
                    },
                    {
                        "url": "security-api-change-password.html",
                        "text": "Change passwords",
                        "title": "Change passwords"
                    },
                    {
                        "url": "security-api-clear-cache.html",
                        "text": "Clear cache",
                        "title": "Clear cache"
                    },
                    {
                        "url": "security-api-clear-role-cache.html",
                        "text": "Clear roles cache",
                        "title": "Clear roles cache"
                    },
                    {
                        "url": "security-api-create-api-key.html",
                        "text": "Create API keys",
                        "title": "Create API keys"
                    },
                    {
                        "url": "security-api-put-privileges.html",
                        "text": "Create or update application privileges",
                        "title": "Create or update application privileges"
                    },
                    {
                        "url": "security-api-put-role-mapping.html",
                        "text": "Create or update role mappings",
                        "title": "Create or update role mappings"
                    },
                    {
                        "url": "security-api-put-role.html",
                        "text": "Create or update roles",
                        "title": "Create or update roles"
                    },
                    {
                        "url": "security-api-put-user.html",
                        "text": "Create or update users",
                        "title": "Create or update users"
                    },
                    {
                        "url": "security-api-delegate-pki-authentication.html",
                        "text": "Delegate PKI authentication",
                        "title": "Delegate PKI authentication"
                    },
                    {
                        "url": "security-api-delete-privilege.html",
                        "text": "Delete application privileges",
                        "title": "Delete application privileges"
                    },
                    {
                        "url": "security-api-delete-role-mapping.html",
                        "text": "Delete role mappings",
                        "title": "Delete role mappings"
                    },
                    {
                        "url": "security-api-delete-role.html",
                        "text": "Delete roles",
                        "title": "Delete roles"
                    },
                    {
                        "url": "security-api-delete-user.html",
                        "text": "Delete users",
                        "title": "Delete users"
                    },
                    {
                        "url": "security-api-disable-user.html",
                        "text": "Disable users",
                        "title": "Disable users"
                    },
                    {
                        "url": "security-api-enable-user.html",
                        "text": "Enable users",
                        "title": "Enable users"
                    },
                    {
                        "url": "security-api-get-api-key.html",
                        "text": "Get API key information",
                        "title": "Get API key information"
                    },
                    {
                        "url": "security-api-get-privileges.html",
                        "text": "Get application privileges",
                        "title": "Get application privileges"
                    },
                    {
                        "url": "security-api-get-builtin-privileges.html",
                        "text": "Get builtin privileges",
                        "title": "Get builtin privileges"
                    },
                    {
                        "url": "security-api-get-role-mapping.html",
                        "text": "Get role mappings",
                        "title": "Get role mappings"
                    },
                    {
                        "url": "security-api-get-role.html",
                        "text": "Get roles",
                        "title": "Get roles"
                    },
                    {
                        "url": "security-api-get-token.html",
                        "text": "Get token",
                        "title": "Get token"
                    },
                    {
                        "url": "security-api-get-user.html",
                        "text": "Get users",
                        "title": "Get users"
                    },
                    {
                        "url": "security-api-has-privileges.html",
                        "text": "Has privileges",
                        "title": "Has privileges"
                    },
                    {
                        "url": "security-api-invalidate-api-key.html",
                        "text": "Invalidate API key",
                        "title": "Invalidate API key"
                    },
                    {
                        "url": "security-api-invalidate-token.html",
                        "text": "Invalidate token",
                        "title": "Invalidate token"
                    },
                    {
                        "url": "security-api-oidc-prepare-authentication.html",
                        "text": "OpenID Connect Prepare Authentication API",
                        "title": "OpenID Connect Prepare Authentication API"
                    },
                    {
                        "url": "security-api-oidc-authenticate.html",
                        "text": "OpenID Connect authenticate API",
                        "title": "OpenID Connect authenticate API"
                    },
                    {
                        "url": "security-api-oidc-logout.html",
                        "text": "OpenID Connect logout API",
                        "title": "OpenID Connect logout API"
                    },
                    {
                        "url": "security-api-saml-prepare-authentication.html",
                        "text": "SAML prepare authentication API",
                        "title": "SAML prepare authentication API"
                    },
                    {
                        "url": "security-api-saml-authenticate.html",
                        "text": "SAML authenticate API",
                        "title": "SAML authenticate API"
                    },
                    {
                        "url": "security-api-saml-logout.html",
                        "text": "SAML logout API",
                        "title": "SAML logout API"
                    },
                    {
                        "url": "security-api-saml-invalidate.html",
                        "text": "SAML invalidate API",
                        "title": "SAML invalidate API"
                    },
                    {
                        "url": "security-api-ssl.html",
                        "text": "SSL certificate",
                        "title": "SSL certificate"
                    }
                ]
            },
            {
                "url": "snapshot-restore-apis.html",
                "text": "Snapshot and restore APIs",
                "title": "Snapshot and restore APIs",
                "sub": [
                    {
                        "url": "clean-up-snapshot-repo-api.html",
                        "text": "Clean up snapshot repository",
                        "title": "Clean up snapshot repository"
                    },
                    {
                        "url": "delete-snapshot-repo-api.html",
                        "text": "Delete snapshot repository",
                        "title": "Delete snapshot repository"
                    },
                    {
                        "url": "get-snapshot-repo-api.html",
                        "text": "Get snapshot repository",
                        "title": "Get snapshot repository"
                    },
                    {
                        "url": "put-snapshot-repo-api.html",
                        "text": "Put snapshot repository",
                        "title": "Put snapshot repository"
                    },
                    {
                        "url": "verify-snapshot-repo-api.html",
                        "text": "Verify snapshot repository",
                        "title": "Verify snapshot repository"
                    }
                ]
            },
            {
                "url": "snapshot-lifecycle-management-api.html",
                "text": "Snapshot lifecycle management API",
                "title": "Snapshot lifecycle management API",
                "sub": [
                    {
                        "url": "slm-api-put-policy.html",
                        "text": "Put policy",
                        "title": "Put policy"
                    },
                    {
                        "url": "slm-api-get-policy.html",
                        "text": "Get policy",
                        "title": "Get policy"
                    },
                    {
                        "url": "slm-api-delete-policy.html",
                        "text": "Delete policy",
                        "title": "Delete policy"
                    },
                    {
                        "url": "slm-api-execute-lifecycle.html",
                        "text": "Execute snapshot lifecycle policy",
                        "title": "Execute snapshot lifecycle policy"
                    },
                    {
                        "url": "slm-api-execute-retention.html",
                        "text": "Execute snapshot retention policy",
                        "title": "Execute snapshot retention policy"
                    },
                    {
                        "url": "slm-api-get-status.html",
                        "text": "Get snapshot lifecycle management status",
                        "title": "Get snapshot lifecycle management status"
                    },
                    {
                        "url": "slm-api-get-stats.html",
                        "text": "Get snapshot lifecycle stats",
                        "title": "Get snapshot lifecycle stats"
                    },
                    {
                        "url": "slm-api-start.html",
                        "text": "Start snapshot lifecycle management",
                        "title": "Start snapshot lifecycle management"
                    },
                    {
                        "url": "slm-api-stop.html",
                        "text": "Stop snapshot lifecycle management",
                        "title": "Stop snapshot lifecycle management"
                    }
                ]
            },
            {
                "url": "transform-apis.html",
                "text": "Transform APIs",
                "title": "Transform APIs",
                "sub": [
                    {
                        "url": "put-transform.html",
                        "text": "Create transform",
                        "title": "Create transform"
                    },
                    {
                        "url": "delete-transform.html",
                        "text": "Delete transform",
                        "title": "Delete transform"
                    },
                    {
                        "url": "get-transform.html",
                        "text": "Get transforms",
                        "title": "Get transforms"
                    },
                    {
                        "url": "get-transform-stats.html",
                        "text": "Get transform statistics",
                        "title": "Get transform statistics"
                    },
                    {
                        "url": "preview-transform.html",
                        "text": "Preview transform",
                        "title": "Preview transform"
                    },
                    {
                        "url": "start-transform.html",
                        "text": "Start transform",
                        "title": "Start transform"
                    },
                    {
                        "url": "stop-transform.html",
                        "text": "Stop transforms",
                        "title": "Stop transforms"
                    },
                    {
                        "url": "update-transform.html",
                        "text": "Update transform",
                        "title": "Update transform"
                    }
                ]
            },
            {
                "url": "usage-api.html",
                "text": "Usage API",
                "title": "Usage API"
            },
            {
                "url": "watcher-api.html",
                "text": "Watcher APIs",
                "title": "Watcher APIs",
                "sub": [
                    {
                        "url": "watcher-api-ack-watch.html",
                        "text": "Ack watch",
                        "title": "Ack watch"
                    },
                    {
                        "url": "watcher-api-activate-watch.html",
                        "text": "Activate watch",
                        "title": "Activate watch"
                    },
                    {
                        "url": "watcher-api-deactivate-watch.html",
                        "text": "Deactivate watch",
                        "title": "Deactivate watch"
                    },
                    {
                        "url": "watcher-api-delete-watch.html",
                        "text": "Delete watch",
                        "title": "Delete watch"
                    },
                    {
                        "url": "watcher-api-execute-watch.html",
                        "text": "Execute watch",
                        "title": "Execute watch"
                    },
                    {
                        "url": "watcher-api-get-watch.html",
                        "text": "Get watch",
                        "title": "Get watch"
                    },
                    {
                        "url": "watcher-api-stats.html",
                        "text": "Get Watcher stats",
                        "title": "Get Watcher stats"
                    },
                    {
                        "url": "watcher-api-put-watch.html",
                        "text": "Put watch",
                        "title": "Put watch"
                    },
                    {
                        "url": "watcher-api-start.html",
                        "text": "Start watch service",
                        "title": "Start watch service"
                    },
                    {
                        "url": "watcher-api-stop.html",
                        "text": "Stop watch service",
                        "title": "Stop watch service"
                    }
                ]
            },
            {
                "url": "api-definitions.html",
                "text": "Definitions",
                "title": "Definitions",
                "sub": [
                    {
                        "url": "role-mapping-resources.html",
                        "text": "Role mapping resources",
                        "title": "Role mapping resources"
                    }
                ]
            }
        ]
    },
    {
        "url": "breaking-changes.html",
        "text": "Breaking changes",
        "title": "Breaking changes",
        "sub": [
            {
                "url": "breaking-changes-7.7.html",
                "text": "7.7",
                "title": "7.7"
            },
            {
                "url": "breaking-changes-7.6.html",
                "text": "7.6",
                "title": "7.6"
            },
            {
                "url": "breaking-changes-7.5.html",
                "text": "7.5",
                "title": "7.5"
            },
            {
                "url": "breaking-changes-7.4.html",
                "text": "7.4",
                "title": "7.4"
            },
            {
                "url": "breaking-changes-7.3.html",
                "text": "7.3",
                "title": "7.3"
            },
            {
                "url": "breaking-changes-7.2.html",
                "text": "7.2",
                "title": "7.2"
            },
            {
                "url": "breaking-changes-7.1.html",
                "text": "7.1",
                "title": "7.1"
            },
            {
                "url": "breaking-changes-7.0.html",
                "text": "7.0",
                "title": "7.0",
                "sub": [
                    {
                        "url": "migrate-to-java-time.html",
                        "text": "Java time migration guide",
                        "title": "Java time migration guide"
                    }
                ]
            }
        ]
    },
    {
        "url": "es-release-notes.html",
        "text": "Release notes",
        "title": "Release notes",
        "sub": [
            {
                "url": "release-notes-7.7.1.html",
                "text": "Elasticsearch version 7.7.1",
                "title": "Elasticsearch version 7.7.1"
            },
            {
                "url": "release-notes-7.7.0.html",
                "text": "Elasticsearch version 7.7.0",
                "title": "Elasticsearch version 7.7.0"
            },
            {
                "url": "release-notes-7.6.2.html",
                "text": "Elasticsearch version 7.6.2",
                "title": "Elasticsearch version 7.6.2"
            },
            {
                "url": "release-notes-7.6.1.html",
                "text": "Elasticsearch version 7.6.1",
                "title": "Elasticsearch version 7.6.1"
            },
            {
                "url": "release-notes-7.6.0.html",
                "text": "Elasticsearch version 7.6.0",
                "title": "Elasticsearch version 7.6.0"
            },
            {
                "url": "release-notes-7.5.2.html",
                "text": "Elasticsearch version 7.5.2",
                "title": "Elasticsearch version 7.5.2"
            },
            {
                "url": "release-notes-7.5.1.html",
                "text": "Elasticsearch version 7.5.1",
                "title": "Elasticsearch version 7.5.1"
            },
            {
                "url": "release-notes-7.5.0.html",
                "text": "Elasticsearch version 7.5.0",
                "title": "Elasticsearch version 7.5.0"
            },
            {
                "url": "release-notes-7.4.2.html",
                "text": "Elasticsearch version 7.4.2",
                "title": "Elasticsearch version 7.4.2"
            },
            {
                "url": "release-notes-7.4.1.html",
                "text": "Elasticsearch version 7.4.1",
                "title": "Elasticsearch version 7.4.1"
            },
            {
                "url": "release-notes-7.4.0.html",
                "text": "Elasticsearch version 7.4.0",
                "title": "Elasticsearch version 7.4.0"
            },
            {
                "url": "release-notes-7.3.2.html",
                "text": "Elasticsearch version 7.3.2",
                "title": "Elasticsearch version 7.3.2"
            },
            {
                "url": "release-notes-7.3.1.html",
                "text": "Elasticsearch version 7.3.1",
                "title": "Elasticsearch version 7.3.1"
            },
            {
                "url": "release-notes-7.3.0.html",
                "text": "Elasticsearch version 7.3.0",
                "title": "Elasticsearch version 7.3.0"
            },
            {
                "url": "release-notes-7.2.1.html",
                "text": "Elasticsearch version 7.2.1",
                "title": "Elasticsearch version 7.2.1"
            },
            {
                "url": "release-notes-7.2.0.html",
                "text": "Elasticsearch version 7.2.0",
                "title": "Elasticsearch version 7.2.0"
            },
            {
                "url": "release-notes-7.1.1.html",
                "text": "Elasticsearch version 7.1.1",
                "title": "Elasticsearch version 7.1.1"
            },
            {
                "url": "release-notes-7.1.0.html",
                "text": "Elasticsearch version 7.1.0",
                "title": "Elasticsearch version 7.1.0"
            },
            {
                "url": "release-notes-7.0.0.html",
                "text": "Elasticsearch version 7.0.0",
                "title": "Elasticsearch version 7.0.0"
            },
            {
                "url": "release-notes-7.0.0-rc2.html",
                "text": "Elasticsearch version 7.0.0-rc2",
                "title": "Elasticsearch version 7.0.0-rc2"
            },
            {
                "url": "release-notes-7.0.0-rc1.html",
                "text": "Elasticsearch version 7.0.0-rc1",
                "title": "Elasticsearch version 7.0.0-rc1"
            },
            {
                "url": "release-notes-7.0.0-beta1.html",
                "text": "Elasticsearch version 7.0.0-beta1",
                "title": "Elasticsearch version 7.0.0-beta1"
            },
            {
                "url": "release-notes-7.0.0-alpha2.html",
                "text": "Elasticsearch version 7.0.0-alpha2",
                "title": "Elasticsearch version 7.0.0-alpha2"
            },
            {
                "url": "release-notes-7.0.0-alpha1.html",
                "text": "Elasticsearch version 7.0.0-alpha1",
                "title": "Elasticsearch version 7.0.0-alpha1"
            }
        ]
    }
];


function tep_es7EnGoto(ver) {
    switch (ver) {
        case 'other':
            document.getElementById('live_versions').setAttribute('style', 'display:none');
            document.getElementById('other_versions').setAttribute('style', 'display:block');
            break;
        case 'master':
            document.getElementById('live_versions').setAttribute('style', 'display:block');
            document.getElementById('other_versions').setAttribute('style', 'display:none');
            break;
        default:
            // var url = window.location.href.replace('/7.7en/', '/' + ver + '/');
            var url = 'https://www.elastic.co/guide/en/elasticsearch/reference/' + ver + '/' + _link;
            var protocol = window.location.protocol;
            switch (protocol) {
                case 'file:':
                    alert(url);
                    break;
                default:
                    window.open(url);
            }
    }
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

function tep_renderRightDocList() {
    var strDocList = '<div class="toc">\n' +
        '<ul class="toc">\n<li id="book_title" class="collapsible">' +
        '<span>Elasticsearch权威指南: \n' +
        '<select id="live_versions" onchange="tep_es7EnGoto(this.value)"><option value="master">master</option><option value="8.0">8.0</option><option value="7.17">7.17</option><option value="7.16">7.16 </option><option value="7.7" selected="">7.7</option><option value="6.8">6.8</option><option value="other">其他版本</option></select>\n' +
        '<span id="other_versions">其他版本: \n' +
        '<select onchange="tep_es7EnGoto(this.value)"><option value="master">master</option><option value="8.0">8.0</option><option value="7.17">7.17</option><option value="7.16">7.16</option><option value="7.15">7.15</option><option value="7.14">7.14</option><option value="7.13">7.13</option><option value="7.12">7.12</option><option value="7.11">7.11</option><option value="7.10">7.10</option><option value="7.9">7.9</option><option value="7.8">7.8</option><option value="7.7" selected="">7.7</option><option value="7.6">7.6</option><option value="7.5">7.5</option><option value="7.4">7.4</option><option value="7.3">7.3</option><option value="7.2">7.2</option><option value="7.1">7.1</option><option value="7.0">7.0</option><option value="6.8">6.8</option><option value="6.7">6.7</option><option value="6.6">6.6</option><option value="6.5">6.5</option><option value="6.4">6.4</option><option value="6.3">6.3</option><option value="6.2">6.2</option><option value="6.1">6.1</option><option value="6.0">6.0</option><option value="5.6">5.6</option><option value="5.5">5.5</option><option value="5.4">5.4</option><option value="5.3">5.3</option><option value="5.2">5.2</option><option value="5.1">5.1</option><option value="5.0">5.0</option><option value="2.4">2.4</option><option value="2.3">2.3</option><option value="2.2">2.2</option><option value="2.1">2.1</option><option value="2.0">2.0</option><option value="1.7">1.7</option><option value="1.6">1.6</option><option value="1.5">1.5</option><option value="1.4">1.4</option><option value="1.3">1.3</option><option value="0.90">0.90</option></select>\n'+
        '</span>\n' +
        '</span>\n' +
        '</li>\n';
        
        
    //中间的html替换成json格式渲染出来
    strDocList += tep_esRenderNavList(esNavLinks) +
        '</ul>\n' +
        '</div>';

    var url = window.location.href;
    var ix = url.lastIndexOf('/');
    var filename = url.substr(ix + 1, url.length - ix).toLowerCase();

    var listObjId = 'content';
    if (filename == 'index.html') {
        //注意: id=content的有2个, 上面还有一个section!
        //document.querySelector('div#content').innerHTML = strDocList;
    } else {
        listObjId = 'right_col';
        var rightCol = document.querySelector('#'+listObjId);
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
    //没有href的a不触发父级菜单操作
    document.querySelectorAll('.toc li.collapsible a').forEach(function (item) {
        item.addEventListener('click', function (event) {
            if(!item.hasAttribute('href')){
                event.stopPropagation();
            }
        });
    });

    //高亮
    var objList = document.querySelectorAll('#'+listObjId+' a');
    objList.forEach(function (item) { //不要用"for(var i in objList){ objList[i]}", 否则会出意外的
        if (item.getAttribute('href') && item.getAttribute('href').toLowerCase() == filename) {
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

tep_renderRightDocList();
