//数据来自 `convertOfficialMenuToJson.html` 转换的, 以方便中文版的翻译工作
var esNavLinks = [
    {
        "url": "elasticsearch-intro.html",
        "text": "What is Elasticsearch?",
        "sub": [
            {
                "url": "documents-indices.html",
                "text": "Data in: documents and indices"
            },
            {
                "url": "search-analyze.html",
                "text": "Information out: search and analyze"
            },
            {
                "url": "scalability.html",
                "text": "Scalability and resilience"
            }
        ]
    },
    {
        "url": "release-highlights.html",
        "text": "What’s new in 7.7"
    },
    {
        "url": "getting-started.html",
        "text": "Getting started with Elasticsearch",
        "sub": [
            {
                "url": "getting-started-install.html",
                "text": "Get Elasticsearch up and running"
            },
            {
                "url": "getting-started-index.html",
                "text": "Index some documents"
            },
            {
                "url": "getting-started-search.html",
                "text": "Start searching"
            },
            {
                "url": "getting-started-aggregations.html",
                "text": "Analyze results with aggregations"
            },
            {
                "url": "getting-started-next-steps.html",
                "text": "Where to go from here"
            }
        ]
    },
    {
        "url": "setup.html",
        "text": "Set up Elasticsearch",
        "sub": [
            {
                "url": "install-elasticsearch.html",
                "text": "Installing Elasticsearch",
                "sub": [
                    {
                        "url": "targz.html",
                        "text": "Install Elasticsearch from archive on Linux or MacOS"
                    },
                    {
                        "url": "zip-windows.html",
                        "text": "Install Elasticsearch with <code class=\"literal\">.zip</code> on Windows"
                    },
                    {
                        "url": "deb.html",
                        "text": "Install Elasticsearch with Debian Package"
                    },
                    {
                        "url": "rpm.html",
                        "text": "Install Elasticsearch with RPM"
                    },
                    {
                        "url": "windows.html",
                        "text": "Install Elasticsearch with Windows MSI Installer"
                    },
                    {
                        "url": "docker.html",
                        "text": "Install Elasticsearch with Docker"
                    },
                    {
                        "url": "brew.html",
                        "text": "Install Elasticsearch on macOS with Homebrew"
                    }
                ]
            },
            {
                "url": "settings.html",
                "text": "Configuring Elasticsearch",
                "sub": [
                    {
                        "url": "jvm-options.html",
                        "text": "Setting JVM options"
                    },
                    {
                        "url": "secure-settings.html",
                        "text": "Secure settings"
                    },
                    {
                        "url": "auditing-settings.html",
                        "text": "Auditing settings"
                    },
                    {
                        "url": "circuit-breaker.html",
                        "text": "Circuit breaker settings"
                    },
                    {
                        "url": "modules-cluster.html",
                        "text": "Cluster-level shard allocation and routing settings"
                    },
                    {
                        "url": "ccr-settings.html",
                        "text": "Cross-cluster replication settings"
                    },
                    {
                        "url": "modules-discovery-settings.html",
                        "text": "Discovery and cluster formation settings"
                    },
                    {
                        "url": "modules-fielddata.html",
                        "text": "Field data cache settings"
                    },
                    {
                        "url": "modules-http.html",
                        "text": "HTTP"
                    },
                    {
                        "url": "ilm-settings.html",
                        "text": "Index lifecycle management settings"
                    },
                    {
                        "url": "recovery.html",
                        "text": "Index recovery settings"
                    },
                    {
                        "url": "indexing-buffer.html",
                        "text": "Indexing buffer settings"
                    },
                    {
                        "url": "license-settings.html",
                        "text": "License settings"
                    },
                    {
                        "url": "modules-gateway.html",
                        "text": "Local gateway settings"
                    },
                    {
                        "url": "logging.html",
                        "text": "Logging configuration"
                    },
                    {
                        "url": "ml-settings.html",
                        "text": "Machine learning settings"
                    },
                    {
                        "url": "monitoring-settings.html",
                        "text": "Monitoring settings"
                    },
                    {
                        "url": "modules-node.html",
                        "text": "Node"
                    },
                    {
                        "url": "modules-network.html",
                        "text": "Network settings"
                    },
                    {
                        "url": "query-cache.html",
                        "text": "Node query cache settings"
                    },
                    {
                        "url": "search-settings.html",
                        "text": "Search settings"
                    },
                    {
                        "url": "security-settings.html",
                        "text": "Security settings"
                    },
                    {
                        "url": "shard-request-cache.html",
                        "text": "Shard request cache settings"
                    },
                    {
                        "url": "slm-settings.html",
                        "text": "Snapshot lifecycle management settings"
                    },
                    {
                        "url": "sql-settings.html",
                        "text": "SQL access settings"
                    },
                    {
                        "url": "transform-settings.html",
                        "text": "Transforms settings"
                    },
                    {
                        "url": "modules-transport.html",
                        "text": "Transport"
                    },
                    {
                        "url": "modules-threadpool.html",
                        "text": "Thread pools"
                    },
                    {
                        "url": "notification-settings.html",
                        "text": "Watcher settings"
                    }
                ]
            },
            {
                "url": "important-settings.html",
                "text": "Important Elasticsearch configuration",
                "sub": [
                    {
                        "url": "path-settings.html",
                        "text": "<code class=\"literal\">path.data</code> and <code class=\"literal\">path.logs</code>"
                    },
                    {
                        "url": "cluster.name.html",
                        "text": "<code class=\"literal\">cluster.name</code>"
                    },
                    {
                        "url": "node.name.html",
                        "text": "<code class=\"literal\">node.name</code>"
                    },
                    {
                        "url": "network.host.html",
                        "text": "<code class=\"literal\">network.host</code>"
                    },
                    {
                        "url": "discovery-settings.html",
                        "text": "Discovery and cluster formation settings"
                    },
                    {
                        "url": "heap-size.html",
                        "text": "Setting the heap size"
                    },
                    {
                        "url": "heap-dump-path.html",
                        "text": "JVM heap dump path"
                    },
                    {
                        "url": "gc-logging.html",
                        "text": "GC logging"
                    },
                    {
                        "url": "es-tmpdir.html",
                        "text": "Temp directory"
                    },
                    {
                        "url": "error-file-path.html",
                        "text": "JVM fatal error logs"
                    }
                ]
            },
            {
                "url": "system-config.html",
                "text": "Important System Configuration",
                "sub": [
                    {
                        "url": "setting-system-settings.html",
                        "text": "Configuring system settings"
                    },
                    {
                        "url": "setup-configuration-memory.html",
                        "text": "Disable swapping"
                    },
                    {
                        "url": "file-descriptors.html",
                        "text": "File Descriptors"
                    },
                    {
                        "url": "vm-max-map-count.html",
                        "text": "Virtual memory"
                    },
                    {
                        "url": "max-number-of-threads.html",
                        "text": "Number of threads"
                    },
                    {
                        "url": "networkaddress-cache-ttl.html",
                        "text": "DNS cache settings"
                    },
                    {
                        "url": "executable-jna-tmpdir.html",
                        "text": "JNA temporary directory not mounted with <code class=\"literal\">noexec</code>"
                    }
                ]
            },
            {
                "url": "bootstrap-checks.html",
                "text": "Bootstrap Checks",
                "sub": [
                    {
                        "url": "_heap_size_check.html",
                        "text": "Heap size check"
                    },
                    {
                        "url": "_file_descriptor_check.html",
                        "text": "File descriptor check"
                    },
                    {
                        "url": "_memory_lock_check.html",
                        "text": "Memory lock check"
                    },
                    {
                        "url": "max-number-threads-check.html",
                        "text": "Maximum number of threads check"
                    },
                    {
                        "url": "_max_file_size_check.html",
                        "text": "Max file size check"
                    },
                    {
                        "url": "max-size-virtual-memory-check.html",
                        "text": "Maximum size virtual memory check"
                    },
                    {
                        "url": "_maximum_map_count_check.html",
                        "text": "Maximum map count check"
                    },
                    {
                        "url": "_client_jvm_check.html",
                        "text": "Client JVM check"
                    },
                    {
                        "url": "_use_serial_collector_check.html",
                        "text": "Use serial collector check"
                    },
                    {
                        "url": "_system_call_filter_check.html",
                        "text": "System call filter check"
                    },
                    {
                        "url": "_onerror_and_onoutofmemoryerror_checks.html",
                        "text": "OnError and OnOutOfMemoryError checks"
                    },
                    {
                        "url": "_early_access_check.html",
                        "text": "Early-access check"
                    },
                    {
                        "url": "_g1gc_check.html",
                        "text": "G1GC check"
                    },
                    {
                        "url": "_all_permission_check.html",
                        "text": "All permission check"
                    },
                    {
                        "url": "_discovery_configuration_check.html",
                        "text": "Discovery configuration check"
                    }
                ]
            },
            {
                "url": "bootstrap-checks-xpack.html",
                "text": "Bootstrap Checks for X-Pack"
            },
            {
                "url": "starting-elasticsearch.html",
                "text": "Starting Elasticsearch"
            },
            {
                "url": "stopping-elasticsearch.html",
                "text": "Stopping Elasticsearch"
            },
            {
                "url": "modules-discovery.html",
                "text": "Discovery and cluster formation",
                "sub": [
                    {
                        "url": "modules-discovery-hosts-providers.html",
                        "text": "Discovery"
                    },
                    {
                        "url": "modules-discovery-quorums.html",
                        "text": "Quorum-based decision making"
                    },
                    {
                        "url": "modules-discovery-voting.html",
                        "text": "Voting configurations"
                    },
                    {
                        "url": "modules-discovery-bootstrap-cluster.html",
                        "text": "Bootstrapping a cluster"
                    },
                    {
                        "url": "cluster-state-publishing.html",
                        "text": "Publishing the cluster state"
                    },
                    {
                        "url": "cluster-fault-detection.html",
                        "text": "Cluster fault detection"
                    }
                ]
            },
            {
                "url": "add-elasticsearch-nodes.html",
                "text": "Add and remove nodes in your cluster"
            },
            {
                "url": "restart-cluster.html",
                "text": "Full-cluster restart and rolling restart"
            },
            {
                "url": "modules-remote-clusters.html",
                "text": "Remote clusters"
            },
            {
                "url": "setup-xpack.html",
                "text": "Set up X-Pack"
            },
            {
                "url": "setup-xpack-client.html",
                "text": "Configuring X-Pack Java Clients"
            },
            {
                "url": "modules-plugins.html",
                "text": "Plugins"
            }
        ]
    },
    {
        "url": "setup-upgrade.html",
        "text": "Upgrade Elasticsearch",
        "sub": [
            {
                "url": "rolling-upgrades.html",
                "text": "Rolling upgrades"
            },
            {
                "url": "restart-upgrade.html",
                "text": "Full cluster restart upgrade"
            },
            {
                "url": "reindex-upgrade.html",
                "text": "Reindex before upgrading",
                "sub": [
                    {
                        "url": "reindex-upgrade-inplace.html",
                        "text": "Reindex in place"
                    },
                    {
                        "url": "reindex-upgrade-remote.html",
                        "text": "Reindex from a remote cluster"
                    }
                ]
            }
        ]
    },
    {
        "url": "search-your-data.html",
        "text": "Search your data",
        "sub": [
            {
                "url": "run-a-search.html",
                "text": "Run a search"
            },
            {
                "url": "near-real-time.html",
                "text": "Near real-time search"
            },
            {
                "url": "async-search-intro.html",
                "text": "Long-running searches"
            },
            {
                "url": "modules-cross-cluster-search.html",
                "text": "Search across clusters"
            }
        ]
    },
    {
        "url": "query-dsl.html",
        "text": "Query DSL",
        "sub": [
            {
                "url": "query-filter-context.html",
                "text": "Query and filter context"
            },
            {
                "url": "compound-queries.html",
                "text": "Compound queries",
                "sub": [
                    {
                        "url": "query-dsl-bool-query.html",
                        "text": "Boolean"
                    },
                    {
                        "url": "query-dsl-boosting-query.html",
                        "text": "Boosting"
                    },
                    {
                        "url": "query-dsl-constant-score-query.html",
                        "text": "Constant score"
                    },
                    {
                        "url": "query-dsl-dis-max-query.html",
                        "text": "Disjunction max"
                    },
                    {
                        "url": "query-dsl-function-score-query.html",
                        "text": "Function score"
                    }
                ]
            },
            {
                "url": "full-text-queries.html",
                "text": "Full text queries",
                "sub": [
                    {
                        "url": "query-dsl-intervals-query.html",
                        "text": "Intervals"
                    },
                    {
                        "url": "query-dsl-match-query.html",
                        "text": "Match"
                    },
                    {
                        "url": "query-dsl-match-bool-prefix-query.html",
                        "text": "Match boolean prefix"
                    },
                    {
                        "url": "query-dsl-match-query-phrase.html",
                        "text": "Match phrase"
                    },
                    {
                        "url": "query-dsl-match-query-phrase-prefix.html",
                        "text": "Match phrase prefix"
                    },
                    {
                        "url": "query-dsl-multi-match-query.html",
                        "text": "Multi-match"
                    },
                    {
                        "url": "query-dsl-common-terms-query.html",
                        "text": "Common Terms Query"
                    },
                    {
                        "url": "query-dsl-query-string-query.html",
                        "text": "Query string"
                    },
                    {
                        "url": "query-dsl-simple-query-string-query.html",
                        "text": "Simple query string"
                    }
                ]
            },
            {
                "url": "geo-queries.html",
                "text": "Geo queries",
                "sub": [
                    {
                        "url": "query-dsl-geo-bounding-box-query.html",
                        "text": "Geo-bounding box"
                    },
                    {
                        "url": "query-dsl-geo-distance-query.html",
                        "text": "Geo-distance"
                    },
                    {
                        "url": "query-dsl-geo-polygon-query.html",
                        "text": "Geo-polygon"
                    },
                    {
                        "url": "query-dsl-geo-shape-query.html",
                        "text": "Geo-shape"
                    }
                ]
            },
            {
                "url": "shape-queries.html",
                "text": "Shape queries",
                "sub": [
                    {
                        "url": "query-dsl-shape-query.html",
                        "text": "Shape"
                    }
                ]
            },
            {
                "url": "joining-queries.html",
                "text": "Joining queries",
                "sub": [
                    {
                        "url": "query-dsl-nested-query.html",
                        "text": "Nested"
                    },
                    {
                        "url": "query-dsl-has-child-query.html",
                        "text": "Has child"
                    },
                    {
                        "url": "query-dsl-has-parent-query.html",
                        "text": "Has parent"
                    },
                    {
                        "url": "query-dsl-parent-id-query.html",
                        "text": "Parent ID"
                    },
                    {
                        "url": "_notes_3.html",
                        "text": "Notes"
                    }
                ]
            },
            {
                "url": "query-dsl-match-all-query.html",
                "text": "Match all"
            },
            {
                "url": "span-queries.html",
                "text": "Span queries",
                "sub": [
                    {
                        "url": "query-dsl-span-containing-query.html",
                        "text": "Span containing"
                    },
                    {
                        "url": "query-dsl-span-field-masking-query.html",
                        "text": "Span field masking"
                    },
                    {
                        "url": "query-dsl-span-first-query.html",
                        "text": "Span first"
                    },
                    {
                        "url": "query-dsl-span-multi-term-query.html",
                        "text": "Span multi-term"
                    },
                    {
                        "url": "query-dsl-span-near-query.html",
                        "text": "Span near"
                    },
                    {
                        "url": "query-dsl-span-not-query.html",
                        "text": "Span not"
                    },
                    {
                        "url": "query-dsl-span-or-query.html",
                        "text": "Span or"
                    },
                    {
                        "url": "query-dsl-span-term-query.html",
                        "text": "Span term"
                    },
                    {
                        "url": "query-dsl-span-within-query.html",
                        "text": "Span within"
                    }
                ]
            },
            {
                "url": "specialized-queries.html",
                "text": "Specialized queries",
                "sub": [
                    {
                        "url": "query-dsl-distance-feature-query.html",
                        "text": "Distance feature"
                    },
                    {
                        "url": "query-dsl-mlt-query.html",
                        "text": "More like this"
                    },
                    {
                        "url": "query-dsl-percolate-query.html",
                        "text": "Percolate"
                    },
                    {
                        "url": "_notes_4.html",
                        "text": "Notes"
                    },
                    {
                        "url": "query-dsl-rank-feature-query.html",
                        "text": "Rank feature"
                    },
                    {
                        "url": "query-dsl-script-query.html",
                        "text": "Script"
                    },
                    {
                        "url": "query-dsl-script-score-query.html",
                        "text": "Script score"
                    },
                    {
                        "url": "query-dsl-wrapper-query.html",
                        "text": "Wrapper"
                    },
                    {
                        "url": "query-dsl-pinned-query.html",
                        "text": "Pinned Query"
                    }
                ]
            },
            {
                "url": "term-level-queries.html",
                "text": "Term-level queries",
                "sub": [
                    {
                        "url": "query-dsl-exists-query.html",
                        "text": "Exists"
                    },
                    {
                        "url": "query-dsl-fuzzy-query.html",
                        "text": "Fuzzy"
                    },
                    {
                        "url": "query-dsl-ids-query.html",
                        "text": "IDs"
                    },
                    {
                        "url": "query-dsl-prefix-query.html",
                        "text": "Prefix"
                    },
                    {
                        "url": "query-dsl-range-query.html",
                        "text": "Range"
                    },
                    {
                        "url": "query-dsl-regexp-query.html",
                        "text": "Regexp"
                    },
                    {
                        "url": "query-dsl-term-query.html",
                        "text": "Term"
                    },
                    {
                        "url": "query-dsl-terms-query.html",
                        "text": "Terms"
                    },
                    {
                        "url": "query-dsl-terms-set-query.html",
                        "text": "Terms set"
                    },
                    {
                        "url": "query-dsl-type-query.html",
                        "text": "Type Query"
                    },
                    {
                        "url": "query-dsl-wildcard-query.html",
                        "text": "Wildcard"
                    }
                ]
            },
            {
                "url": "query-dsl-minimum-should-match.html",
                "text": "<code class=\"literal\">minimum_should_match</code> parameter"
            },
            {
                "url": "query-dsl-multi-term-rewrite.html",
                "text": "<code class=\"literal\">rewrite</code> parameter"
            },
            {
                "url": "regexp-syntax.html",
                "text": "Regular expression syntax"
            }
        ]
    },
    {
        "url": "xpack-sql.html",
        "text": "SQL access",
        "sub": [
            {
                "url": "sql-overview.html",
                "text": "Overview"
            },
            {
                "url": "sql-getting-started.html",
                "text": "Getting Started with SQL"
            },
            {
                "url": "sql-concepts.html",
                "text": "Conventions and Terminology",
                "sub": [
                    {
                        "url": "_mapping_concepts_across_sql_and_elasticsearch.html",
                        "text": "Mapping concepts across SQL and Elasticsearch"
                    }
                ]
            },
            {
                "url": "sql-security.html",
                "text": "Security"
            },
            {
                "url": "sql-rest.html",
                "text": "SQL REST API",
                "sub": [
                    {
                        "url": "sql-rest-overview.html",
                        "text": "Overview"
                    },
                    {
                        "url": "sql-rest-format.html",
                        "text": "Response Data Formats"
                    },
                    {
                        "url": "sql-pagination.html",
                        "text": "Paginating through a large response"
                    },
                    {
                        "url": "sql-rest-filtering.html",
                        "text": "Filtering using Elasticsearch query DSL"
                    },
                    {
                        "url": "sql-rest-columnar.html",
                        "text": "Columnar results"
                    },
                    {
                        "url": "sql-rest-params.html",
                        "text": "Passing parameters to a query"
                    },
                    {
                        "url": "sql-rest-fields.html",
                        "text": "Supported REST parameters"
                    }
                ]
            },
            {
                "url": "sql-translate.html",
                "text": "SQL Translate API"
            },
            {
                "url": "sql-cli.html",
                "text": "SQL CLI"
            },
            {
                "url": "sql-jdbc.html",
                "text": "SQL JDBC",
                "sub": [
                    {
                        "url": "_api_usage.html",
                        "text": "API usage"
                    }
                ]
            },
            {
                "url": "sql-odbc.html",
                "text": "SQL ODBC",
                "sub": [
                    {
                        "url": "sql-odbc-installation.html",
                        "text": "Driver installation"
                    },
                    {
                        "url": "sql-odbc-setup.html",
                        "text": "Configuration"
                    }
                ]
            },
            {
                "url": "sql-client-apps.html",
                "text": "SQL Client Applications",
                "sub": [
                    {
                        "url": "sql-client-apps-dbeaver.html",
                        "text": "DBeaver"
                    },
                    {
                        "url": "sql-client-apps-dbvis.html",
                        "text": "DbVisualizer"
                    },
                    {
                        "url": "sql-client-apps-excel.html",
                        "text": "Microsoft Excel"
                    },
                    {
                        "url": "sql-client-apps-powerbi.html",
                        "text": "Microsoft Power BI Desktop"
                    },
                    {
                        "url": "sql-client-apps-ps1.html",
                        "text": "Microsoft PowerShell"
                    },
                    {
                        "url": "sql-client-apps-microstrat.html",
                        "text": "MicroStrategy Desktop"
                    },
                    {
                        "url": "sql-client-apps-qlik.html",
                        "text": "Qlik Sense Desktop"
                    },
                    {
                        "url": "sql-client-apps-squirrel.html",
                        "text": "SQuirreL SQL"
                    },
                    {
                        "url": "sql-client-apps-workbench.html",
                        "text": "SQL Workbench/J"
                    },
                    {
                        "url": "sql-client-apps-tableau.html",
                        "text": "Tableau Desktop"
                    }
                ]
            },
            {
                "url": "sql-spec.html",
                "text": "SQL Language",
                "sub": [
                    {
                        "url": "sql-lexical-structure.html",
                        "text": "Lexical Structure"
                    },
                    {
                        "url": "sql-commands.html",
                        "text": "SQL Commands"
                    },
                    {
                        "url": "sql-syntax-describe-table.html",
                        "text": "DESCRIBE TABLE"
                    },
                    {
                        "url": "sql-syntax-select.html",
                        "text": "SELECT"
                    },
                    {
                        "url": "sql-syntax-show-columns.html",
                        "text": "SHOW COLUMNS"
                    },
                    {
                        "url": "sql-syntax-show-functions.html",
                        "text": "SHOW FUNCTIONS"
                    },
                    {
                        "url": "sql-syntax-show-tables.html",
                        "text": "SHOW TABLES"
                    },
                    {
                        "url": "sql-data-types.html",
                        "text": "Data Types"
                    },
                    {
                        "url": "sql-index-patterns.html",
                        "text": "Index patterns"
                    },
                    {
                        "url": "sql-index-frozen.html",
                        "text": "Frozen Indices"
                    }
                ]
            },
            {
                "url": "sql-functions.html",
                "text": "Functions and Operators",
                "sub": [
                    {
                        "url": "sql-operators.html",
                        "text": "Comparison Operators"
                    },
                    {
                        "url": "sql-operators-logical.html",
                        "text": "Logical Operators"
                    },
                    {
                        "url": "sql-operators-math.html",
                        "text": "Math Operators"
                    },
                    {
                        "url": "sql-operators-cast.html",
                        "text": "Cast Operators"
                    },
                    {
                        "url": "sql-like-rlike-operators.html",
                        "text": "LIKE and RLIKE Operators"
                    },
                    {
                        "url": "sql-functions-aggs.html",
                        "text": "Aggregate Functions"
                    },
                    {
                        "url": "sql-functions-grouping.html",
                        "text": "Grouping Functions"
                    },
                    {
                        "url": "sql-functions-datetime.html",
                        "text": "Date/Time and Interval Functions and Operators"
                    },
                    {
                        "url": "sql-functions-search.html",
                        "text": "Full-Text Search Functions"
                    },
                    {
                        "url": "sql-functions-math.html",
                        "text": "Mathematical Functions"
                    },
                    {
                        "url": "sql-functions-string.html",
                        "text": "String Functions"
                    },
                    {
                        "url": "sql-functions-type-conversion.html",
                        "text": "Type Conversion Functions"
                    },
                    {
                        "url": "sql-functions-geo.html",
                        "text": "Geo Functions"
                    },
                    {
                        "url": "sql-functions-conditional.html",
                        "text": "Conditional Functions And Expressions"
                    },
                    {
                        "url": "sql-functions-system.html",
                        "text": "System Functions"
                    }
                ]
            },
            {
                "url": "sql-syntax-reserved.html",
                "text": "Reserved keywords"
            },
            {
                "url": "sql-limitations.html",
                "text": "SQL Limitations"
            }
        ]
    },
    {
        "url": "search-aggregations.html",
        "text": "Aggregations",
        "sub": [
            {
                "url": "search-aggregations-metrics.html",
                "text": "Metrics Aggregations",
                "sub": [
                    {
                        "url": "search-aggregations-metrics-avg-aggregation.html",
                        "text": "Avg Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-weight-avg-aggregation.html",
                        "text": "Weighted Avg Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-boxplot-aggregation.html",
                        "text": "Boxplot Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-cardinality-aggregation.html",
                        "text": "Cardinality Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-stats-aggregation.html",
                        "text": "Stats Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-extendedstats-aggregation.html",
                        "text": "Extended Stats Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-geobounds-aggregation.html",
                        "text": "Geo Bounds Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-geocentroid-aggregation.html",
                        "text": "Geo Centroid Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-max-aggregation.html",
                        "text": "Max Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-min-aggregation.html",
                        "text": "Min Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-median-absolute-deviation-aggregation.html",
                        "text": "Median Absolute Deviation Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-percentile-aggregation.html",
                        "text": "Percentiles Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-percentile-rank-aggregation.html",
                        "text": "Percentile Ranks Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-scripted-metric-aggregation.html",
                        "text": "Scripted Metric Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-string-stats-aggregation.html",
                        "text": "String Stats Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-sum-aggregation.html",
                        "text": "Sum Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-top-hits-aggregation.html",
                        "text": "Top Hits Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-top-metrics.html",
                        "text": "Top Metrics Aggregation"
                    },
                    {
                        "url": "search-aggregations-metrics-valuecount-aggregation.html",
                        "text": "Value Count Aggregation"
                    }
                ]
            },
            {
                "url": "search-aggregations-bucket.html",
                "text": "Bucket Aggregations",
                "sub": [
                    {
                        "url": "search-aggregations-bucket-adjacency-matrix-aggregation.html",
                        "text": "Adjacency Matrix Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-autodatehistogram-aggregation.html",
                        "text": "Auto-interval Date Histogram Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-children-aggregation.html",
                        "text": "Children Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-composite-aggregation.html",
                        "text": "Composite aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-datehistogram-aggregation.html",
                        "text": "Date histogram aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-daterange-aggregation.html",
                        "text": "Date Range Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-diversified-sampler-aggregation.html",
                        "text": "Diversified Sampler Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-filter-aggregation.html",
                        "text": "Filter Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-filters-aggregation.html",
                        "text": "Filters Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-geodistance-aggregation.html",
                        "text": "Geo Distance Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-geohashgrid-aggregation.html",
                        "text": "GeoHash grid Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-geotilegrid-aggregation.html",
                        "text": "GeoTile Grid Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-global-aggregation.html",
                        "text": "Global Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-histogram-aggregation.html",
                        "text": "Histogram Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-iprange-aggregation.html",
                        "text": "IP Range Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-missing-aggregation.html",
                        "text": "Missing Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-nested-aggregation.html",
                        "text": "Nested Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-parent-aggregation.html",
                        "text": "Parent Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-range-aggregation.html",
                        "text": "Range Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-rare-terms-aggregation.html",
                        "text": "Rare Terms Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-reverse-nested-aggregation.html",
                        "text": "Reverse nested Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-sampler-aggregation.html",
                        "text": "Sampler Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-significantterms-aggregation.html",
                        "text": "Significant Terms Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-significanttext-aggregation.html",
                        "text": "Significant Text Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-terms-aggregation.html",
                        "text": "Terms Aggregation"
                    },
                    {
                        "url": "search-aggregations-bucket-range-field-note.html",
                        "text": "Subtleties of bucketing range fields"
                    }
                ]
            },
            {
                "url": "search-aggregations-pipeline.html",
                "text": "Pipeline Aggregations",
                "sub": [
                    {
                        "url": "search-aggregations-pipeline-bucket-script-aggregation.html",
                        "text": "Bucket Script Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-bucket-selector-aggregation.html",
                        "text": "Bucket Selector Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-bucket-sort-aggregation.html",
                        "text": "Bucket Sort Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-avg-bucket-aggregation.html",
                        "text": "Avg Bucket Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-max-bucket-aggregation.html",
                        "text": "Max Bucket Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-min-bucket-aggregation.html",
                        "text": "Min Bucket Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-sum-bucket-aggregation.html",
                        "text": "Sum Bucket Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-cumulative-cardinality-aggregation.html",
                        "text": "Cumulative Cardinality Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-cumulative-sum-aggregation.html",
                        "text": "Cumulative Sum Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-derivative-aggregation.html",
                        "text": "Derivative Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-percentiles-bucket-aggregation.html",
                        "text": "Percentiles Bucket Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-movavg-aggregation.html",
                        "text": "Moving Average Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-movfn-aggregation.html",
                        "text": "Moving Function Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-serialdiff-aggregation.html",
                        "text": "Serial Differencing Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-stats-bucket-aggregation.html",
                        "text": "Stats Bucket Aggregation"
                    },
                    {
                        "url": "search-aggregations-pipeline-extended-stats-bucket-aggregation.html",
                        "text": "Extended Stats Bucket Aggregation"
                    }
                ]
            },
            {
                "url": "search-aggregations-matrix.html",
                "text": "Matrix Aggregations",
                "sub": [
                    {
                        "url": "search-aggregations-matrix-stats-aggregation.html",
                        "text": "Matrix Stats"
                    }
                ]
            },
            {
                "url": "caching-heavy-aggregations.html",
                "text": "Caching heavy aggregations"
            },
            {
                "url": "returning-only-agg-results.html",
                "text": "Returning only aggregation results"
            },
            {
                "url": "agg-metadata.html",
                "text": "Aggregation Metadata"
            },
            {
                "url": "returning-aggregation-type.html",
                "text": "Returning the type of the aggregation"
            },
            {
                "url": "indexing-aggregation-results.html",
                "text": "Indexing aggregation results with transforms"
            }
        ]
    },
    {
        "url": "modules-scripting.html",
        "text": "Scripting",
        "sub": [
            {
                "url": "modules-scripting-using.html",
                "text": "How to use scripts"
            },
            {
                "url": "modules-scripting-fields.html",
                "text": "Accessing document fields and special variables"
            },
            {
                "url": "modules-scripting-security.html",
                "text": "Scripting and security"
            },
            {
                "url": "modules-scripting-painless.html",
                "text": "Painless scripting language"
            },
            {
                "url": "modules-scripting-expression.html",
                "text": "Lucene expressions language"
            },
            {
                "url": "modules-scripting-engine.html",
                "text": "Advanced scripts using script engines"
            }
        ]
    },
    {
        "url": "mapping.html",
        "text": "Mapping",
        "sub": [
            {
                "url": "removal-of-types.html",
                "text": "Removal of mapping types"
            },
            {
                "url": "mapping-types.html",
                "text": "Field datatypes",
                "sub": [
                    {
                        "url": "alias.html",
                        "text": "Alias"
                    },
                    {
                        "url": "array.html",
                        "text": "Arrays"
                    },
                    {
                        "url": "binary.html",
                        "text": "Binary"
                    },
                    {
                        "url": "boolean.html",
                        "text": "Boolean"
                    },
                    {
                        "url": "date.html",
                        "text": "Date"
                    },
                    {
                        "url": "date_nanos.html",
                        "text": "Date nanoseconds"
                    },
                    {
                        "url": "dense-vector.html",
                        "text": "Dense vector"
                    },
                    {
                        "url": "histogram.html",
                        "text": "Histogram"
                    },
                    {
                        "url": "flattened.html",
                        "text": "Flattened"
                    },
                    {
                        "url": "geo-point.html",
                        "text": "Geo-point"
                    },
                    {
                        "url": "geo-shape.html",
                        "text": "Geo-shape"
                    },
                    {
                        "url": "ip.html",
                        "text": "IP"
                    },
                    {
                        "url": "parent-join.html",
                        "text": "Join"
                    },
                    {
                        "url": "keyword.html",
                        "text": "Keyword"
                    },
                    {
                        "url": "nested.html",
                        "text": "Nested"
                    },
                    {
                        "url": "number.html",
                        "text": "Numeric"
                    },
                    {
                        "url": "object.html",
                        "text": "Object"
                    },
                    {
                        "url": "percolator.html",
                        "text": "Percolator"
                    },
                    {
                        "url": "range.html",
                        "text": "Range"
                    },
                    {
                        "url": "rank-feature.html",
                        "text": "Rank feature"
                    },
                    {
                        "url": "rank-features.html",
                        "text": "Rank features"
                    },
                    {
                        "url": "search-as-you-type.html",
                        "text": "Search-as-you-type"
                    },
                    {
                        "url": "sparse-vector.html",
                        "text": "Sparse vector"
                    },
                    {
                        "url": "text.html",
                        "text": "Text"
                    },
                    {
                        "url": "token-count.html",
                        "text": "Token count"
                    },
                    {
                        "url": "shape.html",
                        "text": "Shape"
                    },
                    {
                        "url": "constant-keyword.html",
                        "text": "Constant keyword"
                    }
                ]
            },
            {
                "url": "mapping-fields.html",
                "text": "Meta-Fields",
                "sub": [
                    {
                        "url": "mapping-field-names-field.html",
                        "text": "<code class=\"literal\">_field_names</code> field"
                    },
                    {
                        "url": "mapping-ignored-field.html",
                        "text": "<code class=\"literal\">_ignored</code> field"
                    },
                    {
                        "url": "mapping-id-field.html",
                        "text": "<code class=\"literal\">_id</code> field"
                    },
                    {
                        "url": "mapping-index-field.html",
                        "text": "<code class=\"literal\">_index</code> field"
                    },
                    {
                        "url": "mapping-meta-field.html",
                        "text": "<code class=\"literal\">_meta</code> field"
                    },
                    {
                        "url": "mapping-routing-field.html",
                        "text": "<code class=\"literal\">_routing</code> field"
                    },
                    {
                        "url": "mapping-source-field.html",
                        "text": "<code class=\"literal\">_source</code> field"
                    },
                    {
                        "url": "mapping-type-field.html",
                        "text": "<code class=\"literal\">_type</code> field"
                    }
                ]
            },
            {
                "url": "mapping-params.html",
                "text": "Mapping parameters",
                "sub": [
                    {
                        "url": "analyzer.html",
                        "text": "<code class=\"literal\">analyzer</code>"
                    },
                    {
                        "url": "mapping-boost.html",
                        "text": "<code class=\"literal\">boost</code>"
                    },
                    {
                        "url": "coerce.html",
                        "text": "<code class=\"literal\">coerce</code>"
                    },
                    {
                        "url": "copy-to.html",
                        "text": "<code class=\"literal\">copy_to</code>"
                    },
                    {
                        "url": "doc-values.html",
                        "text": "<code class=\"literal\">doc_values</code>"
                    },
                    {
                        "url": "dynamic.html",
                        "text": "<code class=\"literal\">dynamic</code>"
                    },
                    {
                        "url": "eager-global-ordinals.html",
                        "text": "<code class=\"literal\">eager_global_ordinals</code>"
                    },
                    {
                        "url": "enabled.html",
                        "text": "<code class=\"literal\">enabled</code>"
                    },
                    {
                        "url": "fielddata.html",
                        "text": "<code class=\"literal\">fielddata</code>"
                    },
                    {
                        "url": "mapping-date-format.html",
                        "text": "<code class=\"literal\">format</code>"
                    },
                    {
                        "url": "ignore-above.html",
                        "text": "<code class=\"literal\">ignore_above</code>"
                    },
                    {
                        "url": "ignore-malformed.html",
                        "text": "<code class=\"literal\">ignore_malformed</code>"
                    },
                    {
                        "url": "mapping-index.html",
                        "text": "<code class=\"literal\">index</code>"
                    },
                    {
                        "url": "index-options.html",
                        "text": "<code class=\"literal\">index_options</code>"
                    },
                    {
                        "url": "index-phrases.html",
                        "text": "<code class=\"literal\">index_phrases</code>"
                    },
                    {
                        "url": "index-prefixes.html",
                        "text": "<code class=\"literal\">index_prefixes</code>"
                    },
                    {
                        "url": "mapping-field-meta.html",
                        "text": "<code class=\"literal\">meta</code>"
                    },
                    {
                        "url": "multi-fields.html",
                        "text": "<code class=\"literal\">fields</code>"
                    },
                    {
                        "url": "normalizer.html",
                        "text": "<code class=\"literal\">normalizer</code>"
                    },
                    {
                        "url": "norms.html",
                        "text": "<code class=\"literal\">norms</code>"
                    },
                    {
                        "url": "null-value.html",
                        "text": "<code class=\"literal\">null_value</code>"
                    },
                    {
                        "url": "position-increment-gap.html",
                        "text": "<code class=\"literal\">position_increment_gap</code>"
                    },
                    {
                        "url": "properties.html",
                        "text": "<code class=\"literal\">properties</code>"
                    },
                    {
                        "url": "search-analyzer.html",
                        "text": "<code class=\"literal\">search_analyzer</code>"
                    },
                    {
                        "url": "similarity.html",
                        "text": "<code class=\"literal\">similarity</code>"
                    },
                    {
                        "url": "mapping-store.html",
                        "text": "<code class=\"literal\">store</code>"
                    },
                    {
                        "url": "term-vector.html",
                        "text": "<code class=\"literal\">term_vector</code>"
                    }
                ]
            },
            {
                "url": "dynamic-mapping.html",
                "text": "Dynamic Mapping",
                "sub": [
                    {
                        "url": "dynamic-field-mapping.html",
                        "text": "Dynamic field mapping"
                    },
                    {
                        "url": "dynamic-templates.html",
                        "text": "Dynamic templates"
                    }
                ]
            }
        ]
    },
    {
        "url": "analysis.html",
        "text": "Text analysis",
        "sub": [
            {
                "url": "analysis-overview.html",
                "text": "Overview"
            },
            {
                "url": "analysis-concepts.html",
                "text": "Concepts",
                "sub": [
                    {
                        "url": "analyzer-anatomy.html",
                        "text": "Anatomy of an analyzer"
                    },
                    {
                        "url": "analysis-index-search-time.html",
                        "text": "Index and search analysis"
                    },
                    {
                        "url": "stemming.html",
                        "text": "Stemming"
                    },
                    {
                        "url": "token-graphs.html",
                        "text": "Token graphs"
                    }
                ]
            },
            {
                "url": "configure-text-analysis.html",
                "text": "Configure text analysis",
                "sub": [
                    {
                        "url": "test-analyzer.html",
                        "text": "Test an analyzer"
                    },
                    {
                        "url": "configuring-analyzers.html",
                        "text": "Configuring built-in analyzers"
                    },
                    {
                        "url": "analysis-custom-analyzer.html",
                        "text": "Create a custom analyzer"
                    },
                    {
                        "url": "specify-analyzer.html",
                        "text": "Specify an analyzer"
                    }
                ]
            },
            {
                "url": "analysis-analyzers.html",
                "text": "Built-in analyzer reference",
                "sub": [
                    {
                        "url": "analysis-fingerprint-analyzer.html",
                        "text": "Fingerprint Analyzer"
                    },
                    {
                        "url": "analysis-keyword-analyzer.html",
                        "text": "Keyword Analyzer"
                    },
                    {
                        "url": "analysis-lang-analyzer.html",
                        "text": "Language Analyzers"
                    },
                    {
                        "url": "analysis-pattern-analyzer.html",
                        "text": "Pattern Analyzer"
                    },
                    {
                        "url": "analysis-simple-analyzer.html",
                        "text": "Simple Analyzer"
                    },
                    {
                        "url": "analysis-standard-analyzer.html",
                        "text": "Standard Analyzer"
                    },
                    {
                        "url": "analysis-stop-analyzer.html",
                        "text": "Stop Analyzer"
                    },
                    {
                        "url": "analysis-whitespace-analyzer.html",
                        "text": "Whitespace Analyzer"
                    }
                ]
            },
            {
                "url": "analysis-tokenizers.html",
                "text": "Tokenizer reference",
                "sub": [
                    {
                        "url": "analysis-chargroup-tokenizer.html",
                        "text": "Char Group Tokenizer"
                    },
                    {
                        "url": "analysis-classic-tokenizer.html",
                        "text": "Classic Tokenizer"
                    },
                    {
                        "url": "analysis-edgengram-tokenizer.html",
                        "text": "Edge n-gram tokenizer"
                    },
                    {
                        "url": "analysis-keyword-tokenizer.html",
                        "text": "Keyword Tokenizer"
                    },
                    {
                        "url": "analysis-letter-tokenizer.html",
                        "text": "Letter Tokenizer"
                    },
                    {
                        "url": "analysis-lowercase-tokenizer.html",
                        "text": "Lowercase Tokenizer"
                    },
                    {
                        "url": "analysis-ngram-tokenizer.html",
                        "text": "N-gram tokenizer"
                    },
                    {
                        "url": "analysis-pathhierarchy-tokenizer.html",
                        "text": "Path Hierarchy Tokenizer"
                    },
                    {
                        "url": "analysis-pathhierarchy-tokenizer-examples.html",
                        "text": "Path Hierarchy Tokenizer Examples"
                    },
                    {
                        "url": "analysis-pattern-tokenizer.html",
                        "text": "Pattern Tokenizer"
                    },
                    {
                        "url": "analysis-simplepattern-tokenizer.html",
                        "text": "Simple Pattern Tokenizer"
                    },
                    {
                        "url": "analysis-simplepatternsplit-tokenizer.html",
                        "text": "Simple Pattern Split Tokenizer"
                    },
                    {
                        "url": "analysis-standard-tokenizer.html",
                        "text": "Standard Tokenizer"
                    },
                    {
                        "url": "analysis-thai-tokenizer.html",
                        "text": "Thai Tokenizer"
                    },
                    {
                        "url": "analysis-uaxurlemail-tokenizer.html",
                        "text": "UAX URL Email  Tokenizer"
                    },
                    {
                        "url": "analysis-whitespace-tokenizer.html",
                        "text": "Whitespace Tokenizer"
                    }
                ]
            },
            {
                "url": "analysis-tokenfilters.html",
                "text": "Token filter reference",
                "sub": [
                    {
                        "url": "analysis-apostrophe-tokenfilter.html",
                        "text": "Apostrophe"
                    },
                    {
                        "url": "analysis-asciifolding-tokenfilter.html",
                        "text": "ASCII folding"
                    },
                    {
                        "url": "analysis-cjk-bigram-tokenfilter.html",
                        "text": "CJK bigram"
                    },
                    {
                        "url": "analysis-cjk-width-tokenfilter.html",
                        "text": "CJK width"
                    },
                    {
                        "url": "analysis-classic-tokenfilter.html",
                        "text": "Classic"
                    },
                    {
                        "url": "analysis-common-grams-tokenfilter.html",
                        "text": "Common grams"
                    },
                    {
                        "url": "analysis-condition-tokenfilter.html",
                        "text": "Conditional"
                    },
                    {
                        "url": "analysis-decimal-digit-tokenfilter.html",
                        "text": "Decimal digit"
                    },
                    {
                        "url": "analysis-delimited-payload-tokenfilter.html",
                        "text": "Delimited payload"
                    },
                    {
                        "url": "analysis-dict-decomp-tokenfilter.html",
                        "text": "Dictionary decompounder"
                    },
                    {
                        "url": "analysis-edgengram-tokenfilter.html",
                        "text": "Edge n-gram"
                    },
                    {
                        "url": "analysis-elision-tokenfilter.html",
                        "text": "Elision"
                    },
                    {
                        "url": "analysis-fingerprint-tokenfilter.html",
                        "text": "Fingerprint"
                    },
                    {
                        "url": "analysis-flatten-graph-tokenfilter.html",
                        "text": "Flatten graph"
                    },
                    {
                        "url": "analysis-hunspell-tokenfilter.html",
                        "text": "Hunspell"
                    },
                    {
                        "url": "analysis-hyp-decomp-tokenfilter.html",
                        "text": "Hyphenation decompounder"
                    },
                    {
                        "url": "analysis-keep-types-tokenfilter.html",
                        "text": "Keep types"
                    },
                    {
                        "url": "analysis-keep-words-tokenfilter.html",
                        "text": "Keep words"
                    },
                    {
                        "url": "analysis-keyword-marker-tokenfilter.html",
                        "text": "Keyword marker"
                    },
                    {
                        "url": "analysis-keyword-repeat-tokenfilter.html",
                        "text": "Keyword repeat"
                    },
                    {
                        "url": "analysis-kstem-tokenfilter.html",
                        "text": "KStem"
                    },
                    {
                        "url": "analysis-length-tokenfilter.html",
                        "text": "Length"
                    },
                    {
                        "url": "analysis-limit-token-count-tokenfilter.html",
                        "text": "Limit token count"
                    },
                    {
                        "url": "analysis-lowercase-tokenfilter.html",
                        "text": "Lowercase"
                    },
                    {
                        "url": "analysis-minhash-tokenfilter.html",
                        "text": "MinHash"
                    },
                    {
                        "url": "analysis-multiplexer-tokenfilter.html",
                        "text": "Multiplexer"
                    },
                    {
                        "url": "analysis-ngram-tokenfilter.html",
                        "text": "N-gram"
                    },
                    {
                        "url": "analysis-normalization-tokenfilter.html",
                        "text": "Normalization"
                    },
                    {
                        "url": "analysis-pattern-capture-tokenfilter.html",
                        "text": "Pattern capture"
                    },
                    {
                        "url": "analysis-pattern_replace-tokenfilter.html",
                        "text": "Pattern replace"
                    },
                    {
                        "url": "analysis-phonetic-tokenfilter.html",
                        "text": "Phonetic"
                    },
                    {
                        "url": "analysis-porterstem-tokenfilter.html",
                        "text": "Porter stem"
                    },
                    {
                        "url": "analysis-predicatefilter-tokenfilter.html",
                        "text": "Predicate script"
                    },
                    {
                        "url": "analysis-remove-duplicates-tokenfilter.html",
                        "text": "Remove duplicates"
                    },
                    {
                        "url": "analysis-reverse-tokenfilter.html",
                        "text": "Reverse"
                    },
                    {
                        "url": "analysis-shingle-tokenfilter.html",
                        "text": "Shingle"
                    },
                    {
                        "url": "analysis-snowball-tokenfilter.html",
                        "text": "Snowball"
                    },
                    {
                        "url": "analysis-stemmer-tokenfilter.html",
                        "text": "Stemmer"
                    },
                    {
                        "url": "analysis-stemmer-override-tokenfilter.html",
                        "text": "Stemmer override"
                    },
                    {
                        "url": "analysis-stop-tokenfilter.html",
                        "text": "Stop"
                    },
                    {
                        "url": "analysis-synonym-tokenfilter.html",
                        "text": "Synonym"
                    },
                    {
                        "url": "analysis-synonym-graph-tokenfilter.html",
                        "text": "Synonym graph"
                    },
                    {
                        "url": "analysis-trim-tokenfilter.html",
                        "text": "Trim"
                    },
                    {
                        "url": "analysis-truncate-tokenfilter.html",
                        "text": "Truncate"
                    },
                    {
                        "url": "analysis-unique-tokenfilter.html",
                        "text": "Unique"
                    },
                    {
                        "url": "analysis-uppercase-tokenfilter.html",
                        "text": "Uppercase"
                    },
                    {
                        "url": "analysis-word-delimiter-tokenfilter.html",
                        "text": "Word delimiter"
                    },
                    {
                        "url": "analysis-word-delimiter-graph-tokenfilter.html",
                        "text": "Word delimiter graph"
                    }
                ]
            },
            {
                "url": "analysis-charfilters.html",
                "text": "Character filters reference",
                "sub": [
                    {
                        "url": "analysis-htmlstrip-charfilter.html",
                        "text": "HTML strip"
                    },
                    {
                        "url": "analysis-mapping-charfilter.html",
                        "text": "Mapping"
                    },
                    {
                        "url": "analysis-pattern-replace-charfilter.html",
                        "text": "Pattern Replace Char Filter"
                    }
                ]
            },
            {
                "url": "analysis-normalizers.html",
                "text": "Normalizers"
            }
        ]
    },
    {
        "url": "index-modules.html",
        "text": "Index modules",
        "sub": [
            {
                "url": "index-modules-analysis.html",
                "text": "Analysis"
            },
            {
                "url": "index-modules-allocation.html",
                "text": "Index Shard Allocation",
                "sub": [
                    {
                        "url": "shard-allocation-filtering.html",
                        "text": "Index-level shard allocation filtering"
                    },
                    {
                        "url": "delayed-allocation.html",
                        "text": "Delaying allocation when a node leaves"
                    },
                    {
                        "url": "recovery-prioritization.html",
                        "text": "Index recovery prioritization"
                    },
                    {
                        "url": "allocation-total-shards.html",
                        "text": "Total shards per node"
                    }
                ]
            },
            {
                "url": "index-modules-mapper.html",
                "text": "Mapper"
            },
            {
                "url": "index-modules-merge.html",
                "text": "Merge"
            },
            {
                "url": "index-modules-similarity.html",
                "text": "Similarity module"
            },
            {
                "url": "index-modules-slowlog.html",
                "text": "Slow Log"
            },
            {
                "url": "index-modules-store.html",
                "text": "Store",
                "sub": [
                    {
                        "url": "preload-data-to-file-system-cache.html",
                        "text": "Preloading data into the file system cache"
                    }
                ]
            },
            {
                "url": "index-modules-translog.html",
                "text": "Translog"
            },
            {
                "url": "index-modules-history-retention.html",
                "text": "History retention"
            },
            {
                "url": "index-modules-index-sorting.html",
                "text": "Index Sorting",
                "sub": [
                    {
                        "url": "index-modules-index-sorting-conjunctions.html",
                        "text": "Use index sorting to speed up conjunctions"
                    }
                ]
            }
        ]
    },
    {
        "url": "ingest.html",
        "text": "Ingest node",
        "sub": [
            {
                "url": "pipeline.html",
                "text": "Pipeline Definition"
            },
            {
                "url": "accessing-data-in-pipelines.html",
                "text": "Accessing Data in Pipelines"
            },
            {
                "url": "ingest-conditionals.html",
                "text": "Conditional Execution in Pipelines",
                "sub": [
                    {
                        "url": "ingest-conditional-nullcheck.html",
                        "text": "Handling Nested Fields in Conditionals"
                    },
                    {
                        "url": "ingest-conditional-complex.html",
                        "text": "Complex Conditionals"
                    },
                    {
                        "url": "conditionals-with-multiple-pipelines.html",
                        "text": "Conditionals with the Pipeline Processor"
                    },
                    {
                        "url": "conditionals-with-regex.html",
                        "text": "Conditionals with the Regular Expressions"
                    }
                ]
            },
            {
                "url": "handling-failure-in-pipelines.html",
                "text": "Handling Failures in Pipelines"
            },
            {
                "url": "ingest-enriching-data.html",
                "text": "Enrich your data",
                "sub": [
                    {
                        "url": "enrich-setup.html",
                        "text": "Set up an enrich processor"
                    },
                    {
                        "url": "enrich-policy-definition.html",
                        "text": "Enrich policy definition"
                    },
                    {
                        "url": "geo-match-enrich-policy-type.html",
                        "text": "Example: Enrich your data based on geolocation"
                    },
                    {
                        "url": "match-enrich-policy-type.html",
                        "text": "Example: Enrich your data based on exact values"
                    }
                ]
            },
            {
                "url": "ingest-processors.html",
                "text": "Processors",
                "sub": [
                    {
                        "url": "append-processor.html",
                        "text": "Append Processor"
                    },
                    {
                        "url": "bytes-processor.html",
                        "text": "Bytes Processor"
                    },
                    {
                        "url": "ingest-circle-processor.html",
                        "text": "Circle Processor"
                    },
                    {
                        "url": "convert-processor.html",
                        "text": "Convert Processor"
                    },
                    {
                        "url": "csv-processor.html",
                        "text": "CSV Processor"
                    },
                    {
                        "url": "date-processor.html",
                        "text": "Date Processor"
                    },
                    {
                        "url": "date-index-name-processor.html",
                        "text": "Date Index Name Processor"
                    },
                    {
                        "url": "dissect-processor.html",
                        "text": "Dissect Processor"
                    },
                    {
                        "url": "dot-expand-processor.html",
                        "text": "Dot Expander Processor"
                    },
                    {
                        "url": "drop-processor.html",
                        "text": "Drop Processor"
                    },
                    {
                        "url": "enrich-processor.html",
                        "text": "Enrich Processor"
                    },
                    {
                        "url": "fail-processor.html",
                        "text": "Fail Processor"
                    },
                    {
                        "url": "foreach-processor.html",
                        "text": "Foreach Processor"
                    },
                    {
                        "url": "geoip-processor.html",
                        "text": "GeoIP Processor"
                    },
                    {
                        "url": "grok-processor.html",
                        "text": "Grok Processor"
                    },
                    {
                        "url": "gsub-processor.html",
                        "text": "Gsub Processor"
                    },
                    {
                        "url": "htmlstrip-processor.html",
                        "text": "HTML Strip Processor"
                    },
                    {
                        "url": "inference-processor.html",
                        "text": "Inference Processor"
                    },
                    {
                        "url": "join-processor.html",
                        "text": "Join Processor"
                    },
                    {
                        "url": "json-processor.html",
                        "text": "JSON Processor"
                    },
                    {
                        "url": "kv-processor.html",
                        "text": "KV Processor"
                    },
                    {
                        "url": "lowercase-processor.html",
                        "text": "Lowercase Processor"
                    },
                    {
                        "url": "pipeline-processor.html",
                        "text": "Pipeline Processor"
                    },
                    {
                        "url": "remove-processor.html",
                        "text": "Remove Processor"
                    },
                    {
                        "url": "rename-processor.html",
                        "text": "Rename Processor"
                    },
                    {
                        "url": "script-processor.html",
                        "text": "Script Processor"
                    },
                    {
                        "url": "set-processor.html",
                        "text": "Set Processor"
                    },
                    {
                        "url": "ingest-node-set-security-user-processor.html",
                        "text": "Set Security User Processor"
                    },
                    {
                        "url": "split-processor.html",
                        "text": "Split Processor"
                    },
                    {
                        "url": "sort-processor.html",
                        "text": "Sort Processor"
                    },
                    {
                        "url": "trim-processor.html",
                        "text": "Trim Processor"
                    },
                    {
                        "url": "uppercase-processor.html",
                        "text": "Uppercase Processor"
                    },
                    {
                        "url": "urldecode-processor.html",
                        "text": "URL Decode Processor"
                    },
                    {
                        "url": "user-agent-processor.html",
                        "text": "User Agent processor"
                    }
                ]
            }
        ]
    },
    {
        "url": "index-lifecycle-management.html",
        "text": "ILM: Manage the index lifecycle",
        "sub": [
            {
                "url": "overview-index-lifecycle-management.html",
                "text": "Overview"
            },
            {
                "url": "ilm-concepts.html",
                "text": "Concepts",
                "sub": [
                    {
                        "url": "ilm-index-lifecycle.html",
                        "text": "Index lifecycle"
                    },
                    {
                        "url": "index-rollover.html",
                        "text": "Rollover"
                    },
                    {
                        "url": "update-lifecycle-policy.html",
                        "text": "Policy updates"
                    }
                ]
            },
            {
                "url": "getting-started-index-lifecycle-management.html",
                "text": "Automate rollover"
            },
            {
                "url": "ilm-actions.html",
                "text": "Index lifecycle actions",
                "sub": [
                    {
                        "url": "ilm-allocate.html",
                        "text": "Allocate"
                    },
                    {
                        "url": "ilm-delete.html",
                        "text": "Delete"
                    },
                    {
                        "url": "ilm-forcemerge.html",
                        "text": "Force merge"
                    },
                    {
                        "url": "ilm-freeze.html",
                        "text": "Freeze"
                    },
                    {
                        "url": "ilm-readonly.html",
                        "text": "Read only"
                    },
                    {
                        "url": "ilm-rollover.html",
                        "text": "Rollover"
                    },
                    {
                        "url": "ilm-set-priority.html",
                        "text": "Set priority"
                    },
                    {
                        "url": "ilm-shrink.html",
                        "text": "Shrink"
                    },
                    {
                        "url": "ilm-unfollow.html",
                        "text": "Unfollow"
                    },
                    {
                        "url": "ilm-wait-for-snapshot.html",
                        "text": "Wait for snapshot"
                    }
                ]
            },
            {
                "url": "set-up-lifecycle-policy.html",
                "text": "Configure a lifecycle policy "
            },
            {
                "url": "index-lifecycle-error-handling.html",
                "text": "Resolve lifecycle policy execution errors"
            },
            {
                "url": "start-stop-ilm.html",
                "text": "Start and stop index lifecycle management"
            },
            {
                "url": "ilm-with-existing-indices.html",
                "text": "Manage existing indices"
            },
            {
                "url": "skipping-rollover.html",
                "text": "Skip rollover"
            },
            {
                "url": "index-lifecycle-and-snapshots.html",
                "text": "Restore a managed index"
            }
        ]
    },
    {
        "url": "monitor-elasticsearch-cluster.html",
        "text": "Monitor a cluster",
        "sub": [
            {
                "url": "monitoring-overview.html",
                "text": "Overview"
            },
            {
                "url": "how-monitoring-works.html",
                "text": "How it works"
            },
            {
                "url": "monitoring-production.html",
                "text": "Monitoring in a production environment"
            },
            {
                "url": "configuring-metricbeat.html",
                "text": "Collecting monitoring data with Metricbeat"
            },
            {
                "url": "configuring-filebeat.html",
                "text": "Collecting log data with Filebeat"
            },
            {
                "url": "config-monitoring-indices.html",
                "text": "Configuring indices for monitoring"
            },
            {
                "url": "collecting-monitoring-data.html",
                "text": "Legacy collection methods",
                "sub": [
                    {
                        "url": "es-monitoring-collectors.html",
                        "text": "Collectors"
                    },
                    {
                        "url": "es-monitoring-exporters.html",
                        "text": "Exporters"
                    },
                    {
                        "url": "local-exporter.html",
                        "text": "Local exporters"
                    },
                    {
                        "url": "http-exporter.html",
                        "text": "HTTP exporters"
                    },
                    {
                        "url": "pause-export.html",
                        "text": "Pausing data collection"
                    }
                ]
            },
            {
                "url": "monitoring-troubleshooting.html",
                "text": "Troubleshooting"
            }
        ]
    },
    {
        "url": "frozen-indices.html",
        "text": "Frozen indices",
        "sub": [
            {
                "url": "best_practices.html",
                "text": "Best practices"
            },
            {
                "url": "searching_a_frozen_index.html",
                "text": "Searching a frozen index"
            },
            {
                "url": "monitoring_frozen_indices.html",
                "text": "Monitoring frozen indices"
            }
        ]
    },
    {
        "url": "data-rollup-transform.html",
        "text": "Roll up or transform your data",
        "sub": [
            {
                "url": "xpack-rollup.html",
                "text": "Rolling up historical data",
                "sub": [
                    {
                        "url": "rollup-overview.html",
                        "text": "Overview"
                    },
                    {
                        "url": "rollup-api-quickref.html",
                        "text": "API quick reference"
                    },
                    {
                        "url": "rollup-getting-started.html",
                        "text": "Getting started"
                    },
                    {
                        "url": "rollup-understanding-groups.html",
                        "text": "Understanding groups"
                    },
                    {
                        "url": "rollup-agg-limitations.html",
                        "text": "Rollup aggregation limitations"
                    },
                    {
                        "url": "rollup-search-limitations.html",
                        "text": "Rollup search limitations"
                    }
                ]
            },
            {
                "url": "transforms.html",
                "text": "Transforming data",
                "sub": [
                    {
                        "url": "transform-overview.html",
                        "text": "Overview"
                    },
                    {
                        "url": "transform-setup.html",
                        "text": "Setup"
                    },
                    {
                        "url": "transform-usage.html",
                        "text": "When to use transforms"
                    },
                    {
                        "url": "transform-checkpoints.html",
                        "text": "How checkpoints work"
                    },
                    {
                        "url": "transform-api-quickref.html",
                        "text": "API quick reference"
                    },
                    {
                        "url": "ecommerce-transforms.html",
                        "text": "Tutorial: Transforming the eCommerce sample data"
                    },
                    {
                        "url": "transform-examples.html",
                        "text": "Examples"
                    },
                    {
                        "url": "transform-painless-examples.html",
                        "text": "Painless examples for transforms"
                    },
                    {
                        "url": "transform-troubleshooting.html",
                        "text": "Troubleshooting"
                    },
                    {
                        "url": "transform-limitations.html",
                        "text": "Limitations"
                    }
                ]
            }
        ]
    },
    {
        "url": "high-availability.html",
        "text": "Set up a cluster for high availability",
        "sub": [
            {
                "url": "high-availability-cluster-design.html",
                "text": "Designing for resilience",
                "sub": [
                    {
                        "url": "high-availability-cluster-small-clusters.html",
                        "text": "Resilience in small clusters"
                    },
                    {
                        "url": "high-availability-cluster-design-large-clusters.html",
                        "text": "Resilience in larger clusters"
                    }
                ]
            },
            {
                "url": "backup-cluster.html",
                "text": "Back up a cluster",
                "sub": [
                    {
                        "url": "backup-cluster-data.html",
                        "text": "Back up the data"
                    },
                    {
                        "url": "backup-cluster-configuration.html",
                        "text": "Back up the cluster configuration"
                    },
                    {
                        "url": "security-backup.html",
                        "text": "Back up the security configuration"
                    },
                    {
                        "url": "restore-security-configuration.html",
                        "text": "Restore the security configuration"
                    },
                    {
                        "url": "restore-cluster-data.html",
                        "text": "Restore the data"
                    }
                ]
            },
            {
                "url": "xpack-ccr.html",
                "text": "Cross-cluster replication",
                "sub": [
                    {
                        "url": "ccr-overview.html",
                        "text": "Overview"
                    },
                    {
                        "url": "ccr-requirements.html",
                        "text": "Requirements for leader indices"
                    },
                    {
                        "url": "ccr-auto-follow.html",
                        "text": "Automatically following indices"
                    },
                    {
                        "url": "ccr-getting-started.html",
                        "text": "Getting started with cross-cluster replication"
                    },
                    {
                        "url": "remote-recovery.html",
                        "text": "Remote recovery"
                    },
                    {
                        "url": "ccr-upgrading.html",
                        "text": "Upgrading clusters"
                    }
                ]
            }
        ]
    },
    {
        "url": "snapshot-restore.html",
        "text": "Snapshot and restore",
        "sub": [
            {
                "url": "snapshots-register-repository.html",
                "text": "Register repository"
            },
            {
                "url": "snapshots-take-snapshot.html",
                "text": "Take a snapshot"
            },
            {
                "url": "snapshots-restore-snapshot.html",
                "text": "Restore a snapshot"
            },
            {
                "url": "snapshots-monitor-snapshot-restore.html",
                "text": "Monitor snapshot and restore"
            },
            {
                "url": "snapshot-lifecycle-management.html",
                "text": "SLM: Manage the snapshot lifecycle",
                "sub": [
                    {
                        "url": "getting-started-snapshot-lifecycle-management.html",
                        "text": "Tutorial: Automate backups with SLM"
                    },
                    {
                        "url": "slm-and-security.html",
                        "text": "Security and SLM"
                    },
                    {
                        "url": "slm-retention.html",
                        "text": "Snapshot retention"
                    }
                ]
            }
        ]
    },
    {
        "url": "secure-cluster.html",
        "text": "Secure a cluster",
        "sub": [
            {
                "url": "elasticsearch-security.html",
                "text": "Overview"
            },
            {
                "url": "configuring-security.html",
                "text": "Configuring security",
                "sub": [
                    {
                        "url": "separating-node-client-traffic.html",
                        "text": "Separating node-to-node and client traffic"
                    },
                    {
                        "url": "security-files.html",
                        "text": "Security files"
                    },
                    {
                        "url": "fips-140-compliance.html",
                        "text": "FIPS 140-2"
                    }
                ]
            },
            {
                "url": "setting-up-authentication.html",
                "text": "User authentication",
                "sub": [
                    {
                        "url": "built-in-users.html",
                        "text": "Built-in users"
                    },
                    {
                        "url": "internal-users.html",
                        "text": "Internal users"
                    },
                    {
                        "url": "token-authentication-services.html",
                        "text": "Token-based authentication services"
                    },
                    {
                        "url": "realms.html",
                        "text": "Realms"
                    },
                    {
                        "url": "realm-chains.html",
                        "text": "Realm chains"
                    },
                    {
                        "url": "active-directory-realm.html",
                        "text": "Active Directory user authentication"
                    },
                    {
                        "url": "file-realm.html",
                        "text": "File-based user authentication"
                    },
                    {
                        "url": "ldap-realm.html",
                        "text": "LDAP user authentication"
                    },
                    {
                        "url": "native-realm.html",
                        "text": "Native user authentication"
                    },
                    {
                        "url": "oidc-realm.html",
                        "text": "OpenID Connect authentication"
                    },
                    {
                        "url": "pki-realm.html",
                        "text": "PKI user authentication"
                    },
                    {
                        "url": "saml-realm.html",
                        "text": "SAML authentication"
                    },
                    {
                        "url": "kerberos-realm.html",
                        "text": "Kerberos authentication"
                    },
                    {
                        "url": "custom-realms.html",
                        "text": "Integrating with other authentication systems"
                    },
                    {
                        "url": "anonymous-access.html",
                        "text": "Enabling anonymous access"
                    },
                    {
                        "url": "controlling-user-cache.html",
                        "text": "Controlling the user cache"
                    }
                ]
            },
            {
                "url": "saml-guide.html",
                "text": "Configuring SAML single-sign-on on the Elastic Stack",
                "sub": [
                    {
                        "url": "saml-guide-idp.html",
                        "text": "The identity provider"
                    },
                    {
                        "url": "saml-guide-authentication.html",
                        "text": "Configure Elasticsearch for SAML authentication"
                    },
                    {
                        "url": "saml-sp-metadata.html",
                        "text": "Generating SP metadata"
                    },
                    {
                        "url": "saml-role-mapping.html",
                        "text": "Configuring role mappings"
                    },
                    {
                        "url": "saml-user-metadata.html",
                        "text": "User metadata"
                    },
                    {
                        "url": "saml-kibana.html",
                        "text": "Configuring Kibana"
                    },
                    {
                        "url": "saml-troubleshooting.html",
                        "text": "Troubleshooting SAML Realm Configuration"
                    },
                    {
                        "url": "saml-no-kibana.html",
                        "text": "SAML without Kibana"
                    }
                ]
            },
            {
                "url": "oidc-guide.html",
                "text": "Configuring single sign-on to the Elastic Stack using OpenID Connect",
                "sub": [
                    {
                        "url": "oidc-guide-op.html",
                        "text": "The OpenID Connect Provider"
                    },
                    {
                        "url": "oidc-guide-authentication.html",
                        "text": "Configure Elasticsearch for OpenID Connect authentication"
                    },
                    {
                        "url": "oidc-role-mapping.html",
                        "text": "Configuring role mappings"
                    },
                    {
                        "url": "oidc-user-metadata.html",
                        "text": "User metadata"
                    },
                    {
                        "url": "oidc-kibana.html",
                        "text": "Configuring Kibana"
                    },
                    {
                        "url": "oidc-without-kibana.html",
                        "text": "OpenID Connect without Kibana"
                    }
                ]
            },
            {
                "url": "authorization.html",
                "text": "User authorization",
                "sub": [
                    {
                        "url": "built-in-roles.html",
                        "text": "Built-in roles"
                    },
                    {
                        "url": "defining-roles.html",
                        "text": "Defining roles"
                    },
                    {
                        "url": "security-privileges.html",
                        "text": "Security privileges"
                    },
                    {
                        "url": "document-level-security.html",
                        "text": "Document level security"
                    },
                    {
                        "url": "field-level-security.html",
                        "text": "Field level security"
                    },
                    {
                        "url": "securing-aliases.html",
                        "text": "Granting privileges for indices and aliases"
                    },
                    {
                        "url": "mapping-roles.html",
                        "text": "Mapping users and groups to roles"
                    },
                    {
                        "url": "field-and-document-access-control.html",
                        "text": "Setting up field and document level security"
                    },
                    {
                        "url": "run-as-privilege.html",
                        "text": "Submitting requests on behalf of other users"
                    },
                    {
                        "url": "configuring-authorization-delegation.html",
                        "text": "Configuring authorization delegation"
                    },
                    {
                        "url": "custom-roles-authorization.html",
                        "text": "Customizing roles and authorization"
                    }
                ]
            },
            {
                "url": "enable-audit-logging.html",
                "text": "Enabling audit logging",
                "sub": [
                    {
                        "url": "audit-event-types.html",
                        "text": "Audit event types"
                    },
                    {
                        "url": "audit-log-output.html",
                        "text": "Logfile audit output"
                    },
                    {
                        "url": "auditing-search-queries.html",
                        "text": "Auditing search queries"
                    }
                ]
            },
            {
                "url": "encrypting-communications.html",
                "text": "Encrypting communications",
                "sub": [
                    {
                        "url": "ssl-tls.html",
                        "text": "Setting up TLS on a cluster"
                    },
                    {
                        "url": "configuring-tls.html",
                        "text": "Encrypting communications in Elasticsearch"
                    },
                    {
                        "url": "configuring-tls-docker.html",
                        "text": "Encrypting communications in an Elasticsearch Docker Container"
                    },
                    {
                        "url": "ciphers.html",
                        "text": "Enabling cipher suites for stronger encryption"
                    }
                ]
            },
            {
                "url": "ip-filtering.html",
                "text": "Restricting connections with IP filtering"
            },
            {
                "url": "ccs-clients-integrations.html",
                "text": "Cross cluster search, clients, and integrations",
                "sub": [
                    {
                        "url": "cross-cluster-configuring.html",
                        "text": "Cross cluster search and security"
                    },
                    {
                        "url": "java-clients.html",
                        "text": "Java Client and security"
                    },
                    {
                        "url": "http-clients.html",
                        "text": "HTTP/REST clients and security"
                    },
                    {
                        "url": "hadoop.html",
                        "text": "ES-Hadoop and Security"
                    },
                    {
                        "url": "secure-monitoring.html",
                        "text": "Monitoring and security"
                    }
                ]
            },
            {
                "url": "security-getting-started.html",
                "text": "Tutorial: Getting started with security",
                "sub": [
                    {
                        "url": "get-started-enable-security.html",
                        "text": "Enable Elasticsearch security features"
                    },
                    {
                        "url": "get-started-built-in-users.html",
                        "text": "Create passwords for built-in users"
                    },
                    {
                        "url": "get-started-kibana-user.html",
                        "text": "Add the built-in user to Kibana"
                    },
                    {
                        "url": "get-started-authentication.html",
                        "text": "Configure authentication"
                    },
                    {
                        "url": "get-started-users.html",
                        "text": "Create users"
                    },
                    {
                        "url": "get-started-roles.html",
                        "text": "Assign roles"
                    },
                    {
                        "url": "get-started-logstash-user.html",
                        "text": "Add user information in Logstash"
                    },
                    {
                        "url": "get-started-verify-users.html",
                        "text": "View system metrics in Kibana"
                    }
                ]
            },
            {
                "url": "encrypting-internode-communications.html",
                "text": "Tutorial: Encrypting communications",
                "sub": [
                    {
                        "url": "encrypting-communications-certificates.html",
                        "text": "Generate certificates"
                    },
                    {
                        "url": "encrypting-internode.html",
                        "text": "Encrypt internode communications"
                    },
                    {
                        "url": "encrypting-communications-hosts.html",
                        "text": "Add nodes to your cluster"
                    }
                ]
            },
            {
                "url": "security-troubleshooting.html",
                "text": "Troubleshooting",
                "sub": [
                    {
                        "url": "security-trb-settings.html",
                        "text": "Some settings are not returned via the nodes settings API"
                    },
                    {
                        "url": "security-trb-roles.html",
                        "text": "Authorization exceptions"
                    },
                    {
                        "url": "security-trb-extraargs.html",
                        "text": "Users command fails due to extra arguments"
                    },
                    {
                        "url": "trouble-shoot-active-directory.html",
                        "text": "Users are frequently locked out of Active Directory"
                    },
                    {
                        "url": "trb-security-maccurl.html",
                        "text": "Certificate verification fails for curl on Mac"
                    },
                    {
                        "url": "trb-security-sslhandshake.html",
                        "text": "SSLHandshakeException causes connections to fail"
                    },
                    {
                        "url": "trb-security-ssl.html",
                        "text": "Common SSL/TLS exceptions"
                    },
                    {
                        "url": "trb-security-kerberos.html",
                        "text": "Common Kerberos exceptions"
                    },
                    {
                        "url": "trb-security-saml.html",
                        "text": "Common SAML issues"
                    },
                    {
                        "url": "trb-security-internalserver.html",
                        "text": "Internal Server Error in Kibana"
                    },
                    {
                        "url": "trb-security-setup.html",
                        "text": "Setup-passwords command fails due to connection failure"
                    },
                    {
                        "url": "trb-security-path.html",
                        "text": "Failures due to relocation of the configuration files"
                    }
                ]
            },
            {
                "url": "security-limitations.html",
                "text": "Limitations"
            }
        ]
    },
    {
        "url": "xpack-alerting.html",
        "text": "Alerting on cluster and index events",
        "sub": [
            {
                "url": "watcher-getting-started.html",
                "text": "Getting started with Watcher"
            },
            {
                "url": "how-watcher-works.html",
                "text": "How Watcher works"
            },
            {
                "url": "encrypting-data.html",
                "text": "Encrypting sensitive data in Watcher"
            },
            {
                "url": "input.html",
                "text": "Inputs",
                "sub": [
                    {
                        "url": "input-simple.html",
                        "text": "Simple input"
                    },
                    {
                        "url": "input-search.html",
                        "text": "Search input"
                    },
                    {
                        "url": "input-http.html",
                        "text": "HTTP input"
                    },
                    {
                        "url": "input-chain.html",
                        "text": "Chain input"
                    }
                ]
            },
            {
                "url": "trigger.html",
                "text": "Triggers",
                "sub": [
                    {
                        "url": "trigger-schedule.html",
                        "text": "Schedule trigger"
                    }
                ]
            },
            {
                "url": "condition.html",
                "text": "Conditions",
                "sub": [
                    {
                        "url": "condition-always.html",
                        "text": "Always condition"
                    },
                    {
                        "url": "condition-never.html",
                        "text": "Never condition"
                    },
                    {
                        "url": "condition-compare.html",
                        "text": "Compare condition"
                    },
                    {
                        "url": "condition-array-compare.html",
                        "text": "Array compare condition"
                    },
                    {
                        "url": "condition-script.html",
                        "text": "Script condition"
                    }
                ]
            },
            {
                "url": "actions.html",
                "text": "Actions",
                "sub": [
                    {
                        "url": "action-foreach.html",
                        "text": "Running an action for each element in an array"
                    },
                    {
                        "url": "action-conditions.html",
                        "text": "Adding conditions to actions"
                    },
                    {
                        "url": "actions-email.html",
                        "text": "Email action"
                    },
                    {
                        "url": "actions-webhook.html",
                        "text": "Webhook action"
                    },
                    {
                        "url": "actions-index.html",
                        "text": "Index action"
                    },
                    {
                        "url": "actions-logging.html",
                        "text": "Logging Action"
                    },
                    {
                        "url": "actions-slack.html",
                        "text": "Slack Action"
                    },
                    {
                        "url": "actions-pagerduty.html",
                        "text": "PagerDuty action"
                    },
                    {
                        "url": "actions-jira.html",
                        "text": "Jira action"
                    }
                ]
            },
            {
                "url": "transform.html",
                "text": "Payload transforms",
                "sub": [
                    {
                        "url": "transform-search.html",
                        "text": "Search payload transform"
                    },
                    {
                        "url": "transform-script.html",
                        "text": "Script payload transform"
                    },
                    {
                        "url": "transform-chain.html",
                        "text": "Chain payload transform"
                    }
                ]
            },
            {
                "url": "api-java.html",
                "text": "Java API"
            },
            {
                "url": "managing-watches.html",
                "text": "Managing watches"
            },
            {
                "url": "example-watches.html",
                "text": "Example watches",
                "sub": [
                    {
                        "url": "watch-cluster-status.html",
                        "text": "Watching the status of an Elasticsearch cluster"
                    },
                    {
                        "url": "watching-meetup-data.html",
                        "text": "Watching event data"
                    }
                ]
            },
            {
                "url": "watcher-troubleshooting.html",
                "text": "Troubleshooting"
            },
            {
                "url": "watcher-limitations.html",
                "text": "Limitations"
            }
        ]
    },
    {
        "url": "commands.html",
        "text": "Command line tools",
        "sub": [
            {
                "url": "certgen.html",
                "text": "elasticsearch-certgen"
            },
            {
                "url": "certutil.html",
                "text": "elasticsearch-certutil"
            },
            {
                "url": "elasticsearch-croneval.html",
                "text": "elasticsearch-croneval",
                "sub": [
                    {
                        "url": "_parameters_8.html",
                        "text": "Parameters"
                    }
                ]
            },
            {
                "url": "elasticsearch-keystore.html",
                "text": "elasticsearch-keystore"
            },
            {
                "url": "migrate-tool.html",
                "text": "elasticsearch-migrate"
            },
            {
                "url": "node-tool.html",
                "text": "elasticsearch-node"
            },
            {
                "url": "saml-metadata.html",
                "text": "elasticsearch-saml-metadata"
            },
            {
                "url": "setup-passwords.html",
                "text": "elasticsearch-setup-passwords"
            },
            {
                "url": "shard-tool.html",
                "text": "elasticsearch-shard"
            },
            {
                "url": "syskeygen.html",
                "text": "elasticsearch-syskeygen"
            },
            {
                "url": "users-command.html",
                "text": "elasticsearch-users"
            }
        ]
    },
    {
        "url": "how-to.html",
        "text": "How To",
        "sub": [
            {
                "url": "general-recommendations.html",
                "text": "General recommendations"
            },
            {
                "url": "recipes.html",
                "text": "Recipes",
                "sub": [
                    {
                        "url": "mixing-exact-search-with-stemming.html",
                        "text": "Mixing exact search with stemming"
                    },
                    {
                        "url": "consistent-scoring.html",
                        "text": "Getting consistent scoring"
                    },
                    {
                        "url": "static-scoring-signals.html",
                        "text": "Incorporating static relevance signals into the score"
                    }
                ]
            },
            {
                "url": "tune-for-indexing-speed.html",
                "text": "Tune for indexing speed"
            },
            {
                "url": "tune-for-search-speed.html",
                "text": "Tune for search speed",
                "sub": [
                    {
                        "url": "_tune_your_queries_with_the_profile_api.html",
                        "text": "Tune your queries with the Profile API"
                    },
                    {
                        "url": "faster-phrase-queries.html",
                        "text": "Faster phrase queries with <code class=\"literal\">index_phrases</code>"
                    },
                    {
                        "url": "faster-prefix-queries.html",
                        "text": "Faster prefix queries with <code class=\"literal\">index_prefixes</code>"
                    },
                    {
                        "url": "faster-filtering-with-constant-keyword.html",
                        "text": "Use "
                    }
                ]
            },
            {
                "url": "tune-for-disk-usage.html",
                "text": "Tune for disk usage"
            },
            {
                "url": "avoid-oversharding.html",
                "text": "Avoid oversharding"
            }
        ]
    },
    {
        "url": "glossary.html",
        "text": "Glossary of terms"
    },
    {
        "url": "rest-apis.html",
        "text": "REST APIs",
        "sub": [
            {
                "url": "api-conventions.html",
                "text": "API conventions",
                "sub": [
                    {
                        "url": "multi-index.html",
                        "text": "Multiple indices"
                    },
                    {
                        "url": "date-math-index-names.html",
                        "text": "Date math support in index names"
                    },
                    {
                        "url": "cron-expressions.html",
                        "text": "Cron expressions"
                    },
                    {
                        "url": "common-options.html",
                        "text": "Common options"
                    },
                    {
                        "url": "url-access-control.html",
                        "text": "URL-based access control"
                    }
                ]
            },
            {
                "url": "cat.html",
                "text": "cat APIs",
                "sub": [
                    {
                        "url": "cat-alias.html",
                        "text": "cat aliases"
                    },
                    {
                        "url": "cat-allocation.html",
                        "text": "cat allocation"
                    },
                    {
                        "url": "cat-anomaly-detectors.html",
                        "text": "cat anomaly detectors"
                    },
                    {
                        "url": "cat-count.html",
                        "text": "cat count"
                    },
                    {
                        "url": "cat-dfanalytics.html",
                        "text": "cat data frame analytics"
                    },
                    {
                        "url": "cat-datafeeds.html",
                        "text": "cat datafeeds"
                    },
                    {
                        "url": "cat-fielddata.html",
                        "text": "cat fielddata"
                    },
                    {
                        "url": "cat-health.html",
                        "text": "cat health"
                    },
                    {
                        "url": "cat-indices.html",
                        "text": "cat indices"
                    },
                    {
                        "url": "cat-master.html",
                        "text": "cat master"
                    },
                    {
                        "url": "cat-nodeattrs.html",
                        "text": "cat nodeattrs"
                    },
                    {
                        "url": "cat-nodes.html",
                        "text": "cat nodes"
                    },
                    {
                        "url": "cat-pending-tasks.html",
                        "text": "cat pending tasks"
                    },
                    {
                        "url": "cat-plugins.html",
                        "text": "cat plugins"
                    },
                    {
                        "url": "cat-recovery.html",
                        "text": "cat recovery"
                    },
                    {
                        "url": "cat-repositories.html",
                        "text": "cat repositories"
                    },
                    {
                        "url": "cat-shards.html",
                        "text": "cat shards"
                    },
                    {
                        "url": "cat-segments.html",
                        "text": "cat segments"
                    },
                    {
                        "url": "cat-snapshots.html",
                        "text": "cat snapshots"
                    },
                    {
                        "url": "cat-tasks.html",
                        "text": "cat task management"
                    },
                    {
                        "url": "cat-templates.html",
                        "text": "cat templates"
                    },
                    {
                        "url": "cat-thread-pool.html",
                        "text": "cat thread pool"
                    },
                    {
                        "url": "cat-trained-model.html",
                        "text": "cat trained model"
                    },
                    {
                        "url": "cat-transforms.html",
                        "text": "cat transforms"
                    }
                ]
            },
            {
                "url": "cluster.html",
                "text": "Cluster APIs",
                "sub": [
                    {
                        "url": "cluster-allocation-explain.html",
                        "text": "Cluster allocation explain"
                    },
                    {
                        "url": "cluster-get-settings.html",
                        "text": "Cluster get settings"
                    },
                    {
                        "url": "cluster-health.html",
                        "text": "Cluster health"
                    },
                    {
                        "url": "cluster-reroute.html",
                        "text": "Cluster reroute"
                    },
                    {
                        "url": "cluster-state.html",
                        "text": "Cluster state"
                    },
                    {
                        "url": "cluster-stats.html",
                        "text": "Cluster stats"
                    },
                    {
                        "url": "cluster-update-settings.html",
                        "text": "Cluster update settings"
                    },
                    {
                        "url": "cluster-nodes-usage.html",
                        "text": "Nodes feature usage"
                    },
                    {
                        "url": "cluster-nodes-hot-threads.html",
                        "text": "Nodes hot threads"
                    },
                    {
                        "url": "cluster-nodes-info.html",
                        "text": "Nodes info"
                    },
                    {
                        "url": "cluster-nodes-reload-secure-settings.html",
                        "text": "Nodes reload secure settings"
                    },
                    {
                        "url": "cluster-nodes-stats.html",
                        "text": "Nodes stats"
                    },
                    {
                        "url": "cluster-pending.html",
                        "text": "Pending cluster tasks"
                    },
                    {
                        "url": "cluster-remote-info.html",
                        "text": "Remote cluster info"
                    },
                    {
                        "url": "tasks.html",
                        "text": "Task management"
                    },
                    {
                        "url": "voting-config-exclusions.html",
                        "text": "Voting configuration exclusions"
                    }
                ]
            },
            {
                "url": "ccr-apis.html",
                "text": "Cross-cluster replication APIs",
                "sub": [
                    {
                        "url": "ccr-get-stats.html",
                        "text": "Get CCR stats"
                    },
                    {
                        "url": "ccr-put-follow.html",
                        "text": "Create follower"
                    },
                    {
                        "url": "ccr-post-pause-follow.html",
                        "text": "Pause follower"
                    },
                    {
                        "url": "ccr-post-resume-follow.html",
                        "text": "Resume follower"
                    },
                    {
                        "url": "ccr-post-unfollow.html",
                        "text": "Unfollow"
                    },
                    {
                        "url": "ccr-post-forget-follower.html",
                        "text": "Forget follower"
                    },
                    {
                        "url": "ccr-get-follow-stats.html",
                        "text": "Get follower stats"
                    },
                    {
                        "url": "ccr-get-follow-info.html",
                        "text": "Get follower info"
                    },
                    {
                        "url": "ccr-put-auto-follow-pattern.html",
                        "text": "Create auto-follow pattern"
                    },
                    {
                        "url": "ccr-delete-auto-follow-pattern.html",
                        "text": "Delete auto-follow pattern"
                    },
                    {
                        "url": "ccr-get-auto-follow-pattern.html",
                        "text": "Get auto-follow pattern"
                    },
                    {
                        "url": "ccr-pause-auto-follow-pattern.html",
                        "text": "Pause auto-follow pattern"
                    },
                    {
                        "url": "ccr-resume-auto-follow-pattern.html",
                        "text": "Resume auto-follow pattern"
                    }
                ]
            },
            {
                "url": "docs.html",
                "text": "Document APIs",
                "sub": [
                    {
                        "url": "docs-replication.html",
                        "text": "Reading and Writing documents"
                    },
                    {
                        "url": "docs-index_.html",
                        "text": "Index"
                    },
                    {
                        "url": "docs-get.html",
                        "text": "Get"
                    },
                    {
                        "url": "docs-delete.html",
                        "text": "Delete"
                    },
                    {
                        "url": "docs-delete-by-query.html",
                        "text": "Delete by query"
                    },
                    {
                        "url": "docs-update.html",
                        "text": "Update"
                    },
                    {
                        "url": "docs-update-by-query.html",
                        "text": "Update by query API"
                    },
                    {
                        "url": "docs-multi-get.html",
                        "text": "Multi get"
                    },
                    {
                        "url": "docs-bulk.html",
                        "text": "Bulk"
                    },
                    {
                        "url": "docs-reindex.html",
                        "text": "Reindex"
                    },
                    {
                        "url": "docs-termvectors.html",
                        "text": "Term vectors"
                    },
                    {
                        "url": "docs-multi-termvectors.html",
                        "text": "Multi term vectors"
                    },
                    {
                        "url": "docs-refresh.html",
                        "text": "<code class=\"literal\">?refresh</code>"
                    },
                    {
                        "url": "optimistic-concurrency-control.html",
                        "text": "Optimistic concurrency control"
                    }
                ]
            },
            {
                "url": "enrich-apis.html",
                "text": "Enrich APIs",
                "sub": [
                    {
                        "url": "put-enrich-policy-api.html",
                        "text": "Put enrich policy"
                    },
                    {
                        "url": "delete-enrich-policy-api.html",
                        "text": "Delete enrich policy"
                    },
                    {
                        "url": "get-enrich-policy-api.html",
                        "text": "Get enrich policy"
                    },
                    {
                        "url": "execute-enrich-policy-api.html",
                        "text": "Execute enrich policy"
                    },
                    {
                        "url": "enrich-stats-api.html",
                        "text": "Enrich stats"
                    }
                ]
            },
            {
                "url": "graph-explore-api.html",
                "text": "Explore API"
            },
            {
                "url": "indices.html",
                "text": "Index APIs",
                "sub": [
                    {
                        "url": "indices-add-alias.html",
                        "text": "Add index alias"
                    },
                    {
                        "url": "indices-analyze.html",
                        "text": "Analyze"
                    },
                    {
                        "url": "indices-clearcache.html",
                        "text": "Clear cache"
                    },
                    {
                        "url": "indices-clone-index.html",
                        "text": "Clone index"
                    },
                    {
                        "url": "indices-close.html",
                        "text": "Close index"
                    },
                    {
                        "url": "indices-create-index.html",
                        "text": "Create index"
                    },
                    {
                        "url": "indices-delete-index.html",
                        "text": "Delete index"
                    },
                    {
                        "url": "indices-delete-alias.html",
                        "text": "Delete index alias"
                    },
                    {
                        "url": "indices-delete-template.html",
                        "text": "Delete index template"
                    },
                    {
                        "url": "indices-flush.html",
                        "text": "Flush"
                    },
                    {
                        "url": "indices-forcemerge.html",
                        "text": "Force merge"
                    },
                    {
                        "url": "freeze-index-api.html",
                        "text": "Freeze index"
                    },
                    {
                        "url": "indices-get-field-mapping.html",
                        "text": "Get field mapping"
                    },
                    {
                        "url": "indices-get-index.html",
                        "text": "Get index"
                    },
                    {
                        "url": "indices-get-alias.html",
                        "text": "Get index alias"
                    },
                    {
                        "url": "indices-get-settings.html",
                        "text": "Get index settings"
                    },
                    {
                        "url": "indices-get-template.html",
                        "text": "Get index template"
                    },
                    {
                        "url": "indices-get-mapping.html",
                        "text": "Get mapping"
                    },
                    {
                        "url": "indices-alias-exists.html",
                        "text": "Index alias exists"
                    },
                    {
                        "url": "indices-exists.html",
                        "text": "Index exists"
                    },
                    {
                        "url": "indices-recovery.html",
                        "text": "Index recovery"
                    },
                    {
                        "url": "indices-segments.html",
                        "text": "Index segments"
                    },
                    {
                        "url": "indices-shards-stores.html",
                        "text": "Index shard stores"
                    },
                    {
                        "url": "indices-stats.html",
                        "text": "Index stats"
                    },
                    {
                        "url": "indices-template-exists.html",
                        "text": "Index template exists"
                    },
                    {
                        "url": "indices-open-close.html",
                        "text": "Open index"
                    },
                    {
                        "url": "indices-templates.html",
                        "text": "Put index template"
                    },
                    {
                        "url": "indices-put-mapping.html",
                        "text": "Put mapping"
                    },
                    {
                        "url": "indices-refresh.html",
                        "text": "Refresh"
                    },
                    {
                        "url": "indices-rollover-index.html",
                        "text": "Rollover index"
                    },
                    {
                        "url": "indices-shrink-index.html",
                        "text": "Shrink index"
                    },
                    {
                        "url": "indices-split-index.html",
                        "text": "Split index"
                    },
                    {
                        "url": "indices-synced-flush-api.html",
                        "text": "Synced flush"
                    },
                    {
                        "url": "indices-types-exists.html",
                        "text": "Type exists"
                    },
                    {
                        "url": "unfreeze-index-api.html",
                        "text": "Unfreeze index"
                    },
                    {
                        "url": "indices-aliases.html",
                        "text": "Update index alias"
                    },
                    {
                        "url": "indices-update-settings.html",
                        "text": "Update index settings"
                    }
                ]
            },
            {
                "url": "index-lifecycle-management-api.html",
                "text": "Index lifecycle management API",
                "sub": [
                    {
                        "url": "ilm-put-lifecycle.html",
                        "text": "Create policy"
                    },
                    {
                        "url": "ilm-get-lifecycle.html",
                        "text": "Get policy"
                    },
                    {
                        "url": "ilm-delete-lifecycle.html",
                        "text": "Delete policy"
                    },
                    {
                        "url": "ilm-move-to-step.html",
                        "text": "Move to step"
                    },
                    {
                        "url": "ilm-remove-policy.html",
                        "text": "Remove policy"
                    },
                    {
                        "url": "ilm-retry-policy.html",
                        "text": "Retry policy"
                    },
                    {
                        "url": "ilm-get-status.html",
                        "text": "Get index lifecycle management status"
                    },
                    {
                        "url": "ilm-explain-lifecycle.html",
                        "text": "Explain lifecycle"
                    },
                    {
                        "url": "ilm-start.html",
                        "text": "Start index lifecycle management"
                    },
                    {
                        "url": "ilm-stop.html",
                        "text": "Stop index lifecycle management"
                    }
                ]
            },
            {
                "url": "ingest-apis.html",
                "text": "Ingest APIs",
                "sub": [
                    {
                        "url": "put-pipeline-api.html",
                        "text": "Put pipeline"
                    },
                    {
                        "url": "get-pipeline-api.html",
                        "text": "Get pipeline"
                    },
                    {
                        "url": "delete-pipeline-api.html",
                        "text": "Delete pipeline"
                    },
                    {
                        "url": "simulate-pipeline-api.html",
                        "text": "Simulate pipeline"
                    }
                ]
            },
            {
                "url": "info-api.html",
                "text": "Info API"
            },
            {
                "url": "licensing-apis.html",
                "text": "Licensing APIs",
                "sub": [
                    {
                        "url": "delete-license.html",
                        "text": "Delete license"
                    },
                    {
                        "url": "get-license.html",
                        "text": "Get license"
                    },
                    {
                        "url": "get-trial-status.html",
                        "text": "Get trial status"
                    },
                    {
                        "url": "start-trial.html",
                        "text": "Start trial"
                    },
                    {
                        "url": "get-basic-status.html",
                        "text": "Get basic status"
                    },
                    {
                        "url": "start-basic.html",
                        "text": "Start basic"
                    },
                    {
                        "url": "update-license.html",
                        "text": "Update license"
                    }
                ]
            },
            {
                "url": "ml-apis.html",
                "text": "Machine learning anomaly detection APIs",
                "sub": [
                    {
                        "url": "ml-post-calendar-event.html",
                        "text": "Add events to calendar"
                    },
                    {
                        "url": "ml-put-calendar-job.html",
                        "text": "Add jobs to calendar"
                    },
                    {
                        "url": "ml-close-job.html",
                        "text": "Close jobs"
                    },
                    {
                        "url": "ml-put-job.html",
                        "text": "Create jobs"
                    },
                    {
                        "url": "ml-put-calendar.html",
                        "text": "Create calendar"
                    },
                    {
                        "url": "ml-put-datafeed.html",
                        "text": "Create datafeeds"
                    },
                    {
                        "url": "ml-put-filter.html",
                        "text": "Create filter"
                    },
                    {
                        "url": "ml-delete-calendar.html",
                        "text": "Delete calendar"
                    },
                    {
                        "url": "ml-delete-datafeed.html",
                        "text": "Delete datafeeds"
                    },
                    {
                        "url": "ml-delete-calendar-event.html",
                        "text": "Delete events from calendar"
                    },
                    {
                        "url": "ml-delete-filter.html",
                        "text": "Delete filter"
                    },
                    {
                        "url": "ml-delete-forecast.html",
                        "text": "Delete forecast"
                    },
                    {
                        "url": "ml-delete-job.html",
                        "text": "Delete jobs"
                    },
                    {
                        "url": "ml-delete-calendar-job.html",
                        "text": "Delete jobs from calendar"
                    },
                    {
                        "url": "ml-delete-snapshot.html",
                        "text": "Delete model snapshots"
                    },
                    {
                        "url": "ml-delete-expired-data.html",
                        "text": "Delete expired data"
                    },
                    {
                        "url": "ml-estimate-model-memory.html",
                        "text": "Estimate model memory"
                    },
                    {
                        "url": "ml-find-file-structure.html",
                        "text": "Find file structure"
                    },
                    {
                        "url": "ml-flush-job.html",
                        "text": "Flush jobs"
                    },
                    {
                        "url": "ml-forecast.html",
                        "text": "Forecast jobs"
                    },
                    {
                        "url": "ml-get-bucket.html",
                        "text": "Get buckets"
                    },
                    {
                        "url": "ml-get-calendar.html",
                        "text": "Get calendars"
                    },
                    {
                        "url": "ml-get-category.html",
                        "text": "Get categories"
                    },
                    {
                        "url": "ml-get-datafeed.html",
                        "text": "Get datafeeds"
                    },
                    {
                        "url": "ml-get-datafeed-stats.html",
                        "text": "Get datafeed statistics"
                    },
                    {
                        "url": "ml-get-influencer.html",
                        "text": "Get influencers"
                    },
                    {
                        "url": "ml-get-job.html",
                        "text": "Get jobs"
                    },
                    {
                        "url": "ml-get-job-stats.html",
                        "text": "Get job statistics"
                    },
                    {
                        "url": "get-ml-info.html",
                        "text": "Get machine learning info"
                    },
                    {
                        "url": "ml-get-snapshot.html",
                        "text": "Get model snapshots"
                    },
                    {
                        "url": "ml-get-overall-buckets.html",
                        "text": "Get overall buckets"
                    },
                    {
                        "url": "ml-get-calendar-event.html",
                        "text": "Get scheduled events"
                    },
                    {
                        "url": "ml-get-filter.html",
                        "text": "Get filters"
                    },
                    {
                        "url": "ml-get-record.html",
                        "text": "Get records"
                    },
                    {
                        "url": "ml-open-job.html",
                        "text": "Open jobs"
                    },
                    {
                        "url": "ml-post-data.html",
                        "text": "Post data to jobs"
                    },
                    {
                        "url": "ml-preview-datafeed.html",
                        "text": "Preview datafeeds"
                    },
                    {
                        "url": "ml-revert-snapshot.html",
                        "text": "Revert model snapshots"
                    },
                    {
                        "url": "ml-set-upgrade-mode.html",
                        "text": "Set upgrade mode"
                    },
                    {
                        "url": "ml-start-datafeed.html",
                        "text": "Start datafeeds"
                    },
                    {
                        "url": "ml-stop-datafeed.html",
                        "text": "Stop datafeeds"
                    },
                    {
                        "url": "ml-update-datafeed.html",
                        "text": "Update datafeeds"
                    },
                    {
                        "url": "ml-update-filter.html",
                        "text": "Update filter"
                    },
                    {
                        "url": "ml-update-job.html",
                        "text": "Update jobs"
                    },
                    {
                        "url": "ml-update-snapshot.html",
                        "text": "Update model snapshots"
                    }
                ]
            },
            {
                "url": "ml-df-analytics-apis.html",
                "text": "Machine learning data frame analytics APIs",
                "sub": [
                    {
                        "url": "put-dfanalytics.html",
                        "text": "Create data frame analytics jobs"
                    },
                    {
                        "url": "put-inference.html",
                        "text": "Create inference trained model"
                    },
                    {
                        "url": "delete-dfanalytics.html",
                        "text": "Delete data frame analytics jobs"
                    },
                    {
                        "url": "delete-inference.html",
                        "text": "Delete inference trained model"
                    },
                    {
                        "url": "evaluate-dfanalytics.html",
                        "text": "Evaluate data frame analytics"
                    },
                    {
                        "url": "explain-dfanalytics.html",
                        "text": "Explain data frame analytics API"
                    },
                    {
                        "url": "get-dfanalytics.html",
                        "text": "Get data frame analytics jobs"
                    },
                    {
                        "url": "get-dfanalytics-stats.html",
                        "text": "Get data frame analytics jobs stats"
                    },
                    {
                        "url": "get-inference.html",
                        "text": "Get inference trained model"
                    },
                    {
                        "url": "get-inference-stats.html",
                        "text": "Get inference trained model stats"
                    },
                    {
                        "url": "start-dfanalytics.html",
                        "text": "Start data frame analytics jobs"
                    },
                    {
                        "url": "stop-dfanalytics.html",
                        "text": "Stop data frame analytics jobs"
                    }
                ]
            },
            {
                "url": "migration-api.html",
                "text": "Migration APIs",
                "sub": [
                    {
                        "url": "migration-api-deprecation.html",
                        "text": "Deprecation info"
                    }
                ]
            },
            {
                "url": "indices-reload-analyzers.html",
                "text": "Reload search analyzers"
            },
            {
                "url": "rollup-apis.html",
                "text": "Rollup APIs",
                "sub": [
                    {
                        "url": "rollup-put-job.html",
                        "text": "Create rollup jobs"
                    },
                    {
                        "url": "rollup-delete-job.html",
                        "text": "Delete rollup jobs"
                    },
                    {
                        "url": "rollup-get-job.html",
                        "text": "Get job"
                    },
                    {
                        "url": "rollup-get-rollup-caps.html",
                        "text": "Get rollup caps"
                    },
                    {
                        "url": "rollup-get-rollup-index-caps.html",
                        "text": "Get rollup index caps"
                    },
                    {
                        "url": "rollup-search.html",
                        "text": "Rollup search"
                    },
                    {
                        "url": "rollup-start-job.html",
                        "text": "Start rollup jobs"
                    },
                    {
                        "url": "rollup-stop-job.html",
                        "text": "Stop rollup jobs"
                    }
                ]
            },
            {
                "url": "search.html",
                "text": "Search APIs",
                "sub": [
                    {
                        "url": "search-search.html",
                        "text": "Search"
                    },
                    {
                        "url": "search-request-body.html",
                        "text": "Request Body Search"
                    },
                    {
                        "url": "async-search.html",
                        "text": "Async search"
                    },
                    {
                        "url": "scroll-api.html",
                        "text": "Scroll"
                    },
                    {
                        "url": "clear-scroll-api.html",
                        "text": "Clear scroll"
                    },
                    {
                        "url": "search-template.html",
                        "text": "Search Template"
                    },
                    {
                        "url": "multi-search-template.html",
                        "text": "Multi Search Template"
                    },
                    {
                        "url": "search-shards.html",
                        "text": "Search Shards API"
                    },
                    {
                        "url": "search-suggesters.html",
                        "text": "Suggesters"
                    },
                    {
                        "url": "search-multi-search.html",
                        "text": "Multi Search API"
                    },
                    {
                        "url": "search-count.html",
                        "text": "Count API"
                    },
                    {
                        "url": "search-validate.html",
                        "text": "Validate API"
                    },
                    {
                        "url": "search-explain.html",
                        "text": "Explain API"
                    },
                    {
                        "url": "search-profile.html",
                        "text": "Profile API"
                    },
                    {
                        "url": "search-field-caps.html",
                        "text": "Field Capabilities API"
                    },
                    {
                        "url": "search-rank-eval.html",
                        "text": "Ranking Evaluation API"
                    }
                ]
            },
            {
                "url": "security-api.html",
                "text": "Security APIs",
                "sub": [
                    {
                        "url": "security-api-authenticate.html",
                        "text": "Authenticate"
                    },
                    {
                        "url": "security-api-change-password.html",
                        "text": "Change passwords"
                    },
                    {
                        "url": "security-api-clear-cache.html",
                        "text": "Clear cache"
                    },
                    {
                        "url": "security-api-clear-role-cache.html",
                        "text": "Clear roles cache"
                    },
                    {
                        "url": "security-api-create-api-key.html",
                        "text": "Create API keys"
                    },
                    {
                        "url": "security-api-put-privileges.html",
                        "text": "Create or update application privileges"
                    },
                    {
                        "url": "security-api-put-role-mapping.html",
                        "text": "Create or update role mappings"
                    },
                    {
                        "url": "security-api-put-role.html",
                        "text": "Create or update roles"
                    },
                    {
                        "url": "security-api-put-user.html",
                        "text": "Create or update users"
                    },
                    {
                        "url": "security-api-delegate-pki-authentication.html",
                        "text": "Delegate PKI authentication"
                    },
                    {
                        "url": "security-api-delete-privilege.html",
                        "text": "Delete application privileges"
                    },
                    {
                        "url": "security-api-delete-role-mapping.html",
                        "text": "Delete role mappings"
                    },
                    {
                        "url": "security-api-delete-role.html",
                        "text": "Delete roles"
                    },
                    {
                        "url": "security-api-delete-user.html",
                        "text": "Delete users"
                    },
                    {
                        "url": "security-api-disable-user.html",
                        "text": "Disable users"
                    },
                    {
                        "url": "security-api-enable-user.html",
                        "text": "Enable users"
                    },
                    {
                        "url": "security-api-get-api-key.html",
                        "text": "Get API key information"
                    },
                    {
                        "url": "security-api-get-privileges.html",
                        "text": "Get application privileges"
                    },
                    {
                        "url": "security-api-get-builtin-privileges.html",
                        "text": "Get builtin privileges"
                    },
                    {
                        "url": "security-api-get-role-mapping.html",
                        "text": "Get role mappings"
                    },
                    {
                        "url": "security-api-get-role.html",
                        "text": "Get roles"
                    },
                    {
                        "url": "security-api-get-token.html",
                        "text": "Get token"
                    },
                    {
                        "url": "security-api-get-user.html",
                        "text": "Get users"
                    },
                    {
                        "url": "security-api-has-privileges.html",
                        "text": "Has privileges"
                    },
                    {
                        "url": "security-api-invalidate-api-key.html",
                        "text": "Invalidate API key"
                    },
                    {
                        "url": "security-api-invalidate-token.html",
                        "text": "Invalidate token"
                    },
                    {
                        "url": "security-api-oidc-prepare-authentication.html",
                        "text": "OpenID Connect Prepare Authentication API"
                    },
                    {
                        "url": "security-api-oidc-authenticate.html",
                        "text": "OpenID Connect authenticate API"
                    },
                    {
                        "url": "security-api-oidc-logout.html",
                        "text": "OpenID Connect logout API"
                    },
                    {
                        "url": "security-api-saml-prepare-authentication.html",
                        "text": "SAML prepare authentication API"
                    },
                    {
                        "url": "security-api-saml-authenticate.html",
                        "text": "SAML authenticate API"
                    },
                    {
                        "url": "security-api-saml-logout.html",
                        "text": "SAML logout API"
                    },
                    {
                        "url": "security-api-saml-invalidate.html",
                        "text": "SAML invalidate API"
                    },
                    {
                        "url": "security-api-ssl.html",
                        "text": "SSL certificate"
                    }
                ]
            },
            {
                "url": "snapshot-restore-apis.html",
                "text": "Snapshot and restore APIs",
                "sub": [
                    {
                        "url": "clean-up-snapshot-repo-api.html",
                        "text": "Clean up snapshot repository"
                    },
                    {
                        "url": "delete-snapshot-repo-api.html",
                        "text": "Delete snapshot repository"
                    },
                    {
                        "url": "get-snapshot-repo-api.html",
                        "text": "Get snapshot repository"
                    },
                    {
                        "url": "put-snapshot-repo-api.html",
                        "text": "Put snapshot repository"
                    },
                    {
                        "url": "verify-snapshot-repo-api.html",
                        "text": "Verify snapshot repository"
                    }
                ]
            },
            {
                "url": "snapshot-lifecycle-management-api.html",
                "text": "Snapshot lifecycle management API",
                "sub": [
                    {
                        "url": "slm-api-put-policy.html",
                        "text": "Put policy"
                    },
                    {
                        "url": "slm-api-get-policy.html",
                        "text": "Get policy"
                    },
                    {
                        "url": "slm-api-delete-policy.html",
                        "text": "Delete policy"
                    },
                    {
                        "url": "slm-api-execute-lifecycle.html",
                        "text": "Execute snapshot lifecycle policy"
                    },
                    {
                        "url": "slm-api-execute-retention.html",
                        "text": "Execute snapshot retention policy"
                    },
                    {
                        "url": "slm-api-get-status.html",
                        "text": "Get snapshot lifecycle management status"
                    },
                    {
                        "url": "slm-api-get-stats.html",
                        "text": "Get snapshot lifecycle stats"
                    },
                    {
                        "url": "slm-api-start.html",
                        "text": "Start snapshot lifecycle management"
                    },
                    {
                        "url": "slm-api-stop.html",
                        "text": "Stop snapshot lifecycle management"
                    }
                ]
            },
            {
                "url": "transform-apis.html",
                "text": "Transform APIs",
                "sub": [
                    {
                        "url": "put-transform.html",
                        "text": "Create transform"
                    },
                    {
                        "url": "delete-transform.html",
                        "text": "Delete transform"
                    },
                    {
                        "url": "get-transform.html",
                        "text": "Get transforms"
                    },
                    {
                        "url": "get-transform-stats.html",
                        "text": "Get transform statistics"
                    },
                    {
                        "url": "preview-transform.html",
                        "text": "Preview transform"
                    },
                    {
                        "url": "start-transform.html",
                        "text": "Start transform"
                    },
                    {
                        "url": "stop-transform.html",
                        "text": "Stop transforms"
                    },
                    {
                        "url": "update-transform.html",
                        "text": "Update transform"
                    }
                ]
            },
            {
                "url": "usage-api.html",
                "text": "Usage API"
            },
            {
                "url": "watcher-api.html",
                "text": "Watcher APIs",
                "sub": [
                    {
                        "url": "watcher-api-ack-watch.html",
                        "text": "Ack watch"
                    },
                    {
                        "url": "watcher-api-activate-watch.html",
                        "text": "Activate watch"
                    },
                    {
                        "url": "watcher-api-deactivate-watch.html",
                        "text": "Deactivate watch"
                    },
                    {
                        "url": "watcher-api-delete-watch.html",
                        "text": "Delete watch"
                    },
                    {
                        "url": "watcher-api-execute-watch.html",
                        "text": "Execute watch"
                    },
                    {
                        "url": "watcher-api-get-watch.html",
                        "text": "Get watch"
                    },
                    {
                        "url": "watcher-api-stats.html",
                        "text": "Get Watcher stats"
                    },
                    {
                        "url": "watcher-api-put-watch.html",
                        "text": "Put watch"
                    },
                    {
                        "url": "watcher-api-start.html",
                        "text": "Start watch service"
                    },
                    {
                        "url": "watcher-api-stop.html",
                        "text": "Stop watch service"
                    }
                ]
            },
            {
                "url": "api-definitions.html",
                "text": "Definitions",
                "sub": [
                    {
                        "url": "role-mapping-resources.html",
                        "text": "Role mapping resources"
                    }
                ]
            }
        ]
    },
    {
        "url": "breaking-changes.html",
        "text": "Breaking changes",
        "sub": [
            {
                "url": "breaking-changes-7.7.html",
                "text": "7.7"
            },
            {
                "url": "breaking-changes-7.6.html",
                "text": "7.6"
            },
            {
                "url": "breaking-changes-7.5.html",
                "text": "7.5"
            },
            {
                "url": "breaking-changes-7.4.html",
                "text": "7.4"
            },
            {
                "url": "breaking-changes-7.3.html",
                "text": "7.3"
            },
            {
                "url": "breaking-changes-7.2.html",
                "text": "7.2"
            },
            {
                "url": "breaking-changes-7.1.html",
                "text": "7.1"
            },
            {
                "url": "breaking-changes-7.0.html",
                "text": "7.0",
                "sub": [
                    {
                        "url": "migrate-to-java-time.html",
                        "text": "Java time migration guide"
                    }
                ]
            }
        ]
    },
    {
        "url": "es-release-notes.html",
        "text": "Release notes",
        "sub": [
            {
                "url": "release-notes-7.7.1.html",
                "text": "Elasticsearch version 7.7.1"
            },
            {
                "url": "release-notes-7.7.0.html",
                "text": "Elasticsearch version 7.7.0"
            },
            {
                "url": "release-notes-7.6.2.html",
                "text": "Elasticsearch version 7.6.2"
            },
            {
                "url": "release-notes-7.6.1.html",
                "text": "Elasticsearch version 7.6.1"
            },
            {
                "url": "release-notes-7.6.0.html",
                "text": "Elasticsearch version 7.6.0"
            },
            {
                "url": "release-notes-7.5.2.html",
                "text": "Elasticsearch version 7.5.2"
            },
            {
                "url": "release-notes-7.5.1.html",
                "text": "Elasticsearch version 7.5.1"
            },
            {
                "url": "release-notes-7.5.0.html",
                "text": "Elasticsearch version 7.5.0"
            },
            {
                "url": "release-notes-7.4.2.html",
                "text": "Elasticsearch version 7.4.2"
            },
            {
                "url": "release-notes-7.4.1.html",
                "text": "Elasticsearch version 7.4.1"
            },
            {
                "url": "release-notes-7.4.0.html",
                "text": "Elasticsearch version 7.4.0"
            },
            {
                "url": "release-notes-7.3.2.html",
                "text": "Elasticsearch version 7.3.2"
            },
            {
                "url": "release-notes-7.3.1.html",
                "text": "Elasticsearch version 7.3.1"
            },
            {
                "url": "release-notes-7.3.0.html",
                "text": "Elasticsearch version 7.3.0"
            },
            {
                "url": "release-notes-7.2.1.html",
                "text": "Elasticsearch version 7.2.1"
            },
            {
                "url": "release-notes-7.2.0.html",
                "text": "Elasticsearch version 7.2.0"
            },
            {
                "url": "release-notes-7.1.1.html",
                "text": "Elasticsearch version 7.1.1"
            },
            {
                "url": "release-notes-7.1.0.html",
                "text": "Elasticsearch version 7.1.0"
            },
            {
                "url": "release-notes-7.0.0.html",
                "text": "Elasticsearch version 7.0.0"
            },
            {
                "url": "release-notes-7.0.0-rc2.html",
                "text": "Elasticsearch version 7.0.0-rc2"
            },
            {
                "url": "release-notes-7.0.0-rc1.html",
                "text": "Elasticsearch version 7.0.0-rc1"
            },
            {
                "url": "release-notes-7.0.0-beta1.html",
                "text": "Elasticsearch version 7.0.0-beta1"
            },
            {
                "url": "release-notes-7.0.0-alpha2.html",
                "text": "Elasticsearch version 7.0.0-alpha2"
            },
            {
                "url": "release-notes-7.0.0-alpha1.html",
                "text": "Elasticsearch version 7.0.0-alpha1"
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
            rt += '<ul>';
            rt += tep_esRenderNavList(row.sub);
            rt += '</ul>';
        }
        rt += '</li>';
    }
    return rt;
}

function tep_renderRightDocList(filename) {
    var strDocList = '<div class="toc">' +
        '<ul class="toc"><li id="book_title" class="collapsible">' +
        '<span>Elasticsearch Guide: <select id="live_versions" onchange="tep_es7EnGoto(this.value)"><option value="master">master</option><option value="8.0">8.0</option><option value="7.17">7.17</option><option value="7.16">7.16 </option><option value="7.7" selected="">7.7</option><option value="6.8">6.8</option><option value="other">other versions</option></select>' +
        '<span id="other_versions">other versions: ' +
        '<select onchange="tep_es7EnGoto(this.value)"><option value="master">master</option><option value="8.0">8.0</option><option value="7.17">7.17</option><option value="7.16">7.16 (current)</option><option value="7.15">7.15</option><option value="7.14">7.14</option><option value="7.13">7.13</option><option value="7.12">7.12</option><option value="7.11">7.11</option><option value="7.10">7.10</option><option value="7.9">7.9</option><option value="7.8">7.8</option><option value="7.7" selected="">7.7</option><option value="7.6">7.6</option><option value="7.5">7.5</option><option value="7.4">7.4</option><option value="7.3">7.3</option><option value="7.2">7.2</option><option value="7.1">7.1</option><option value="7.0">7.0</option><option value="6.8">6.8</option><option value="6.7">6.7</option><option value="6.6">6.6</option><option value="6.5">6.5</option><option value="6.4">6.4</option><option value="6.3">6.3</option><option value="6.2">6.2</option><option value="6.1">6.1</option><option value="6.0">6.0</option><option value="5.6">5.6</option><option value="5.5">5.5</option><option value="5.4">5.4</option><option value="5.3">5.3</option><option value="5.2">5.2</option><option value="5.1">5.1</option><option value="5.0">5.0</option><option value="2.4">2.4</option><option value="2.3">2.3</option><option value="2.2">2.2</option><option value="2.1">2.1</option><option value="2.0">2.0</option><option value="1.7">1.7</option><option value="1.6">1.6</option><option value="1.5">1.5</option><option value="1.4">1.4</option><option value="1.3">1.3</option><option value="0.90">0.90</option></select></span></span></li>';

    //中间的html替换成json格式渲染出来
    strDocList += tep_esRenderNavList(esNavLinks) +
        '</ul>' +
        '</div>';

    var url = window.location.href;
    var ix = url.lastIndexOf('/');
    var filename = url.substr(ix + 1, url.length - ix).toLowerCase();

    if (filename == 'index.html') {
        //注意: id=content的有2个, 上面还有一个section!
        document.querySelector('div#content').innerHTML = strDocList;
    } else {
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

tep_renderRightDocList();
