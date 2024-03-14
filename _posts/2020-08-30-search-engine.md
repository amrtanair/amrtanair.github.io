---
layout: post
title:  "Barebones Search Engine Implementation"
date:   2020-08-30 00:13:24 +0530
categories: projects
comments: false
---

This blog documents the process of implementing a search engine that takes a query term as input and ranks relevant documents in the corpus. 

<!--more-->

The corpus, in this case is a collection of random documents, that is, wiki's of a tv show's prominent characters, a movie franchise, a country, a social media company and a type of fish. 

Code at : [amrtanair/search-engine](https://github.com/amrtanair/search-engine)

### Breaking down the problem and the approach

The first step was to create the inverted index(a dictionary that stores the mapping of a term to its occurrences in a document/corpus) for a single document. This involved using the requests library to fetch the contents of a webpage and the BeautifulSoup library to parse and store the text content on the webpage. The resulting textfile was then stored as tokens(a list that contains all words in the document(minus the stopwords) in lowercase format) and a document list. Later, the inverted index was created using the python dictionary data type. 

The second step was doing the same on the corpus, that is, creating an inverted index that included the position of every relevant term in every document. The way to do this was to create a ```mother_inverted_index``` that would be a collection of all inverted indexes such that the value for every key in the dictionary is a list of lists, something like this: 
Let's say the word "harry", appears in documents 1, 3, but not 2. The record in the hashmap would be as follows: 
```
'harry' => [[1, [45, 67, 54]], [2, [2, 5, 4]]]]
```
Every time the inverted index for a doc was created, it was 'merged' into the mother inverted index by looping through every term in the newly created one: adding the term to the larger inverted index if it doesn't exist and if it does exist, add it to the existing key/value pair in the ```mother_inverted_index```.

The next step was the create a basic search engine, sans the ranking. A string was taken as an input and each word was compared with the inverted index. 

### Ranking

[tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) was used to rank the relevant documents. It describes how 'important' a term is in a given document. There are different versions of implementing this algorithm. Tf-idf here will be calculated using the method [sci-kit](https://github.com/scikit-learn/scikit-learn/blob/0fb307bf3/sklearn/feature_extraction/text.py#L1322) uses in the hyperlinked file.

After the tf-idf was calculated, the vectors for each document was also normalised using the l2-norm normalization technique. Normalisation was performed because we would be comparing each document's vector with a query vector. This query vector is also k-dimensional and normalised. 

The similarity between the query vector and each relevant document's vector was done using the cosine similarity method which calculates the angle between two vectors in a multi-dimensional space. Smaller the angle, the higher the similarity. 
The value returned is a list of lists of all document URLs with the similarity index in such a format:
```
[[url1, cosine1], [url2, cosine2]]
```
### Work ahead

There are some points where this implementation can be improved:

1.  Stemming the tokens in the corpus and the query. Different forms of a word can be searched for it would make the resulting inverted index cleaner. 
2.  A cleaner way of generating tfidf. There is room for improvement, using a different data structure or routine would make it more space/time efficient. 
3.  Dividing the modules into classes better and using OOP methodology to structure this.
4.  Using a much more diverse dataset.

> Note: I am still learning python and I have a long long way to go. I will be updating this blog and the Github repository as I get better at writing pythonic code. This is still a WIP :)