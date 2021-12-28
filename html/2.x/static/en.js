function renderRightDocList(filename) {
    //region docList
    var strDocList = '<div class="toc">' +
        '<ul class="toc"><li id="book_title" class="collapsible"><span>Elasticsearch - The Definitive Guide: <select id="live_versions"><option value="master">master</option><option value="2.x" selected="">2.x (current)</option><option value="1.x">1.x</option></select></span></li><li><span class="preface"><a href="foreword_id.html">Foreword</a></span>' +
        '</li>' +
        '<li class="collapsible"><span class="preface"><a href="_preface.html">Preface</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_who_should_read_this_book.html">Who Should Read This Book</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_why_we_wrote_this_book.html">Why We Wrote This Book</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_elasticsearch_version.html">Elasticsearch Version</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_how_to_read_this_book.html">How to Read This Book</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_navigating_this_book.html">Navigating This Book</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_online_resources.html">Online Resources</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_conventions_used_in_this_book.html">Conventions Used in This Book</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_using_code_examples.html">Using Code Examples</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_acknowledgments.html">Acknowledgments</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="getting-started.html">Getting Started</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="intro.html">You Know, for Search…​</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="running-elasticsearch.html">Installing and Running Elasticsearch</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_talking_to_elasticsearch.html">Talking to Elasticsearch</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_document_oriented.html">Document Oriented</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_finding_your_feet.html">Finding Your Feet</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_indexing_employee_documents.html">Indexing Employee Documents</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_retrieving_a_document.html">Retrieving a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_search_lite.html">Search Lite</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_search_with_query_dsl.html">Search with Query DSL</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_more_complicated_searches.html">More-Complicated Searches</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_full_text_search.html">Full-Text Search</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_phrase_search.html">Phrase Search</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="highlighting-intro.html">Highlighting Our Searches</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_analytics.html">Analytics</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_tutorial_conclusion.html">Tutorial Conclusion</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_distributed_nature.html">Distributed Nature</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_next_steps.html">Next Steps</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="distributed-cluster.html">Life Inside a Cluster</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_an_empty_cluster.html">An Empty Cluster</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="cluster-health.html">Cluster Health</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_add_an_index.html">Add an Index</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_add_failover.html">Add Failover</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_scale_horizontally.html">Scale Horizontally</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_coping_with_failure.html">Coping with Failure</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="data-in-data-out.html">Data In, Data Out</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="document.html">What Is a Document?</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_document_metadata.html">Document Metadata</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="index-doc.html">Indexing a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="get-doc.html">Retrieving a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="doc-exists.html">Checking Whether a Document Exists</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="update-doc.html">Updating a Whole Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="create-doc.html">Creating a New Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="delete-doc.html">Deleting a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="version-control.html">Dealing with Conflicts</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="optimistic-concurrency-control.html">Optimistic Concurrency Control</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="partial-updates.html">Partial Updates to Documents</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_retrieving_multiple_documents.html">Retrieving Multiple Documents</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="bulk.html">Cheaper in Bulk</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="distributed-docs.html">Distributed Document Store</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="routing-value.html">Routing a Document to a Shard</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_how_primary_and_replica_shards_interact.html">How Primary and Replica Shards Interact</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="distrib-write.html">Creating, Indexing, and Deleting a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="distrib-read.html">Retrieving a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_partial_updates_to_a_document.html">Partial Updates to a Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="distrib-multi-doc.html">Multidocument Patterns</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="search.html">Searching—​The Basic Tools</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="empty-search.html">The Empty Search</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="multi-index-multi-type.html">Multi-index, Multitype</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="pagination.html">Pagination</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="search-lite.html">Search <em>Lite</em></a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="mapping-analysis.html">Mapping and Analysis</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_exact_values_versus_full_text.html">Exact Values Versus Full Text</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="inverted-index.html">Inverted Index</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="analysis-intro.html">Analysis and Analyzers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="mapping-intro.html">Mapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="complex-core-fields.html">Complex Core Field Types</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="full-body-search.html">Full-Body Search</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_empty_search.html">Empty Search</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="query-dsl-intro.html">Query DSL</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_queries_and_filters.html">Queries and Filters</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_most_important_queries.html">Most Important Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="combining-queries-together.html">Combining queries together</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_validating_queries.html">Validating Queries</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="sorting.html">Sorting and Relevance</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_sorting.html">Sorting</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="multi-fields.html">String Sorting and Multifields</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="relevance-intro.html">What Is Relevance?</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="docvalues-intro.html">Doc Values Intro</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="distributed-search.html">Distributed Search Execution</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_query_phase.html">Query Phase</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_fetch_phase.html">Fetch Phase</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_search_options.html">Search Options</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="scroll.html">Scroll</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="index-management.html">Index Management</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_creating_an_index.html">Creating an Index</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_deleting_an_index.html">Deleting an Index</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_index_settings.html">Index Settings</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="configuring-analyzers.html">Configuring Analyzers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="custom-analyzers.html">Custom Analyzers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="mapping.html">Types and Mappings</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="root-object.html">The Root Object</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="dynamic-mapping.html">Dynamic Mapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="custom-dynamic-mapping.html">Customizing Dynamic Mapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="default-mapping.html">Default Mapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="reindex.html">Reindexing Your Data</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="index-aliases.html">Index Aliases and Zero Downtime</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="inside-a-shard.html">Inside a Shard</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="making-text-searchable.html">Making Text Searchable</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="dynamic-indices.html">Dynamically Updatable Indices</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="near-real-time.html">Near Real-Time Search</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="translog.html">Making Changes Persistent</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="merge-process.html">Segment Merging</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="search-in-depth.html">Search in Depth</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="structured-search.html">Structured Search</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_finding_exact_values.html">Finding Exact Values</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="combining-filters.html">Combining Filters</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_finding_multiple_exact_values.html">Finding Multiple Exact Values</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_ranges.html">Ranges</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_dealing_with_null_values.html">Dealing with Null Values</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="filter-caching.html">All About Caching</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="full-text-search.html">Full-Text Search</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="term-vs-full-text.html">Term-Based Versus Full-Text</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="match-query.html">The match Query</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="match-multi-word.html">Multiword Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="bool-query.html">Combining Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_how_match_uses_bool.html">How match Uses bool</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_boosting_query_clauses.html">Boosting Query Clauses</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_controlling_analysis.html">Controlling Analysis</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="relevance-is-broken.html">Relevance Is Broken!</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="multi-field-search.html">Multifield Search</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="multi-query-strings.html">Multiple Query Strings</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_single_query_string.html">Single Query String</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_best_fields.html">Best Fields</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_tuning_best_fields_queries.html">Tuning Best Fields Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="multi-match-query.html">multi_match Query</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="most-fields.html">Most Fields</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_cross_fields_entity_search.html">Cross-fields Entity Search</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="field-centric.html">Field-Centric Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="custom-all.html">Custom _all Fields</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_cross_fields_queries.html">cross-fields Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_exact_value_fields.html">Exact-Value Fields</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="proximity-matching.html">Proximity Matching</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="phrase-matching.html">Phrase Matching</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="slop.html">Mixing It Up</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_multivalue_fields_2.html">Multivalue Fields</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_closer_is_better.html">Closer Is Better</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="proximity-relevance.html">Proximity for Relevance</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_improving_performance.html">Improving Performance</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="shingles.html">Finding Associated Words</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="partial-matching.html">Partial Matching</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_postcodes_and_structured_data.html">Postcodes and Structured Data</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="prefix-query.html">prefix Query</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_wildcard_and_regexp_queries.html">wildcard and regexp Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_query_time_search_as_you_type.html">Query-Time Search-as-You-Type</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_index_time_optimizations.html">Index-Time Optimizations</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_ngrams_for_partial_matching.html">Ngrams for Partial Matching</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_index_time_search_as_you_type.html">Index-Time Search-as-You-Type</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="ngrams-compound-words.html">Ngrams for Compound Words</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="controlling-relevance.html">Controlling Relevance</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="scoring-theory.html">Theory Behind Relevance Scoring</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="practical-scoring-function.html">Lucene’s Practical Scoring Function</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="query-time-boosting.html">Query-Time Boosting</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="query-scoring.html">Manipulating Relevance with Query Structure</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="not-quite-not.html">Not Quite Not</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="ignoring-tfidf.html">Ignoring TF/IDF</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="function-score-query.html">function_score Query</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="boosting-by-popularity.html">Boosting by Popularity</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="function-score-filters.html">Boosting Filtered Subsets</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="random-scoring.html">Random Scoring</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="decay-functions.html">The Closer, The Better</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="Understanding-the-price-Clause.html">Understanding the price Clause</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="script-score.html">Scoring with Scripts</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="pluggable-similarites.html">Pluggable Similarity Algorithms</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="changing-similarities.html">Changing Similarities</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="relevance-conclusion.html">Relevance Tuning Is the Last 10%</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="languages.html">Dealing with Human Language</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="language-intro.html">Getting Started with Languages</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="using-language-analyzers.html">Using Language Analyzers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="configuring-language-analyzers.html">Configuring Language Analyzers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="language-pitfalls.html">Pitfalls of Mixing Languages</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="one-lang-docs.html">One Language per Document</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="one-lang-fields.html">One Language per Field</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="mixed-lang-fields.html">Mixed-Language Fields</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="identifying-words.html">Identifying Words</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="standard-analyzer.html">standard Analyzer</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="standard-tokenizer.html">standard Tokenizer</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="icu-plugin.html">Installing the ICU Plug-in</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="icu-tokenizer.html">icu_tokenizer</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="char-filters.html">Tidying Up Input Text</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="token-normalization.html">Normalizing Tokens</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="lowercase-token-filter.html">In That Case</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="asciifolding-token-filter.html">You Have an Accent</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="unicode-normalization.html">Living in a Unicode World</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="case-folding.html">Unicode Case Folding</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="character-folding.html">Unicode Character Folding</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="sorting-collations.html">Sorting and Collations</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="stemming.html">Reducing Words to Their Root Form</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="algorithmic-stemmers.html">Algorithmic Stemmers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="dictionary-stemmers.html">Dictionary Stemmers</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="hunspell.html">Hunspell Stemmer</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="choosing-a-stemmer.html">Choosing a Stemmer</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="controlling-stemming.html">Controlling Stemming</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="stemming-in-situ.html">Stemming in situ</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="stopwords.html">Stopwords: Performance Versus Precision</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="pros-cons-stopwords.html">Pros and Cons of Stopwords</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="using-stopwords.html">Using Stopwords</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="stopwords-performance.html">Stopwords and Performance</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="common-terms.html">Divide and Conquer</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="stopwords-phrases.html">Stopwords and Phrase Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="common-grams.html">common_grams Token Filter</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="stopwords-relavance.html">Stopwords and Relevance</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="synonyms.html">Synonyms</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="using-synonyms.html">Using Synonyms</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="synonym-formats.html">Formatting Synonyms</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="synonyms-expand-or-contract.html">Expand or contract</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="synonyms-analysis-chain.html">Synonyms and The Analysis Chain</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="multi-word-synonyms.html">Multiword Synonyms and Phrase Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="symbol-synonyms.html">Symbol Synonyms</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="fuzzy-matching.html">Typoes and Mispelings</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="fuzziness.html">Fuzziness</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="fuzzy-query.html">Fuzzy Query</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="fuzzy-match-query.html">Fuzzy match Query</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="fuzzy-scoring.html">Scoring Fuzziness</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="phonetic-matching.html">Phonetic Matching</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="aggregations.html">Aggregations</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="aggs-high-level.html">High-Level Concepts</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_buckets.html">Buckets</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_metrics.html">Metrics</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_combining_the_two.html">Combining the Two</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="_aggregation_test_drive.html">Aggregation Test-Drive</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_adding_a_metric_to_the_mix.html">Adding a Metric to the Mix</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_buckets_inside_buckets.html">Buckets Inside Buckets</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_one_final_modification.html">One Final Modification</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li><span class="chapter"><a href="_building_bar_charts.html">Building Bar Charts</a></span>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="_looking_at_time.html">Looking at Time</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_returning_empty_buckets.html">Returning Empty Buckets</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_extended_example.html">Extended Example</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_the_sky_8217_s_the_limit.html">The Sky’s the Limit</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li><span class="chapter"><a href="_scoping_aggregations.html">Scoping Aggregations</a></span>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="_filtering_queries_and_aggregations.html">Filtering Queries and Aggregations</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_filtering_queries.html">Filtering Queries</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_filter_bucket.html">Filter Bucket</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_post_filter.html">Post Filter</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_recap.html">Recap</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="_sorting_multivalue_buckets.html">Sorting Multivalue Buckets</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_intrinsic_sorts.html">Intrinsic Sorts</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_sorting_by_a_metric.html">Sorting by a Metric</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_sorting_based_on_deep_metrics.html">Sorting Based on "Deep" Metrics</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="_approximate_aggregations.html">Approximate Aggregations</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="cardinality.html">Finding Distinct Counts</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="percentiles.html">Calculating Percentiles</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="significant-terms.html">Significant Terms</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_significant_terms_demo.html">significant_terms Demo</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="docvalues-and-fielddata.html">Doc Values and Fielddata</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="docvalues.html">Doc Values</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_deep_dive_on_doc_values.html">Deep Dive on Doc Values</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="aggregations-and-analysis.html">Aggregations and Analysis</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_limiting_memory_usage.html">Limiting Memory Usage</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_fielddata_filtering.html">Fielddata Filtering</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="preload-fielddata.html">Preloading Fielddata</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_preventing_combinatorial_explosions.html">Preventing Combinatorial Explosions</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li><span class="chapter"><a href="_closing_thoughts.html">Closing Thoughts</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="geoloc.html">Geolocation</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="geopoints.html">Geo Points</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="lat-lon-formats.html">Lat/Lon Formats</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="filter-by-geopoint.html">Filtering by Geo Point</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="geo-bounding-box.html">Geo Bounding Box Filter</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="geo-distance.html">Geo Distance Filter</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="sorting-by-distance.html">Sorting by Distance</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="geohashes.html">Geohashes</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="geohash-mapping.html">Mapping Geohashes</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="geohash-cell-query.html">Geohash Cell Query</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="geo-aggs.html">Geo Aggregations</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="geo-distance-agg.html">Geo Distance Aggregation</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="geohash-grid-agg.html">Geohash Grid Aggregation</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="geo-bounds-agg.html">Geo Bounds Aggregation</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="geo-shapes.html">Geo Shapes</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="mapping-geo-shapes.html">Mapping Geo Shapes</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="indexing-geo-shapes.html">Indexing Geo Shapes</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="querying-geo-shapes.html">Querying Geo Shapes</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="indexed-geo-shapes.html">Querying with Indexed Shapes</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="modeling-your-data.html">Modeling Your Data</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="relations.html">Handling Relationships</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="application-joins.html">Application-side Joins</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="denormalization.html">Denormalizing Your Data</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="top-hits.html">Field Collapsing</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="denormalization-concurrency.html">Denormalization and Concurrency</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="concurrency-solutions.html">Solving Concurrency Issues</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="nested-objects.html">Nested Objects</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="nested-mapping.html">Nested Object Mapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="nested-query.html">Querying a Nested Object</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="nested-sorting.html">Sorting by Nested Fields</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="nested-aggregation.html">Nested Aggregations</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="parent-child.html">Parent-Child Relationship</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="parent-child-mapping.html">Parent-Child Mapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="indexing-parent-child.html">Indexing Parents and Children</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="has-child.html">Finding Parents by Their Children</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="has-parent.html">Finding Children by Their Parents</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="children-agg.html">Children Aggregation</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="grandparents.html">Grandparents and Grandchildren</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="parent-child-performance.html">Practical Considerations</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="scale.html">Designing for Scale</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="shard-scale.html">The Unit of Scale</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="overallocation.html">Shard Overallocation</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="kagillion-shards.html">Kagillion Shards</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="capacity-planning.html">Capacity Planning</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="replica-shards.html">Replica Shards</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="multiple-indices.html">Multiple Indices</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="time-based.html">Time-Based Data</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="index-templates.html">Index Templates</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="retiring-data.html">Retiring Data</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="user-based.html">User-Based Data</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="shared-index.html">Shared Index</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="faking-it.html">Faking Index per User with Aliases</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="one-big-user.html">One Big User</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="finite-scale.html">Scale Is Not Infinite</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="part"><a href="administration.html">Administration, Monitoring, and Deployment</a></span>' +
        '<ul>' +
        '<li class="collapsible"><span class="chapter"><a href="cluster-admin.html">Monitoring</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="marvel.html">Marvel for Monitoring</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_cluster_health.html">Cluster Health</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_monitoring_individual_nodes.html">Monitoring Individual Nodes</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_cluster_stats.html">Cluster Stats</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_index_stats.html">Index Stats</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_pending_tasks.html">Pending Tasks</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_cat_api.html">cat API</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="deploy.html">Production Deployment</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="hardware.html">Hardware</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_java_virtual_machine.html">Java Virtual Machine</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_transport_client_versus_node_client.html">Transport Client Versus Node Client</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_configuration_management.html">Configuration Management</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="important-configuration-changes.html">Important Configuration Changes</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_don_8217_t_touch_these_settings.html">Don’t Touch These Settings!</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="heap-sizing.html">Heap: Sizing and Swapping</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_file_descriptors_and_mmap.html">File Descriptors and MMap</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_revisit_this_list_before_production.html">Revisit This List Before Production</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '<li class="collapsible"><span class="chapter"><a href="post_deploy.html">Post-Deployment</a></span>' +
        '<ul>' +
        '<li><span class="section"><a href="_changing_settings_dynamically.html">Changing Settings Dynamically</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="logging.html">Logging</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="indexing-performance.html">Indexing Performance Tips</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_delaying_shard_allocation.html">Delaying Shard Allocation</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_rolling_restarts.html">Rolling Restarts</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="backing-up-your-cluster.html">Backing Up Your Cluster</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_restoring_from_a_snapshot.html">Restoring from a Snapshot</a></span>' +
        '</li>' +
        '<li><span class="section"><a href="_clusters_are_living_breathing_creatures.html">Clusters Are Living, Breathing Creatures</a></span>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
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

renderRightDocList();
