---
layout: post
title:  "About Interpretable Machine Learning"
date:   2021-06-25 00:13:24 +0530
categories: blog ml
comments: false
---
Interpretable machine learning, as specified by Carvalho, Diogo V et al (2019) in “Machine learning interpretability: A survey on methods and metrics” enables a user to verify, interpret and understand the reasoning of a system. 

<!--more-->

Another succinct definition describes the properties of such a model. 


> An interpretable model is one where a human can contemplate it at once (simulatability), based on a full understanding of the algorithm (algorithmic transparency) where each input is by itself interpretable (decomposability) [^2].

A learned model is an implicit, dynamically varying relationship that learns from the data provided to it, and is constantly updated as new information is added as input. Explaining what they predict, otherwise known as interpretable machine learning, is a relatively small subset of research when compared to the focus on achieving better performance metrics for these models [^1]. 

<!--more-->

Interest in the area of machine learning interpretability has seen resurgence [^3] since many real-world problems in different domains are being tackled using machine learning and artificial intelligence. Sensitive issues like recidivism prediction, detection of money-laundering in financial systems, and healthcare are being addressed using increasingly complex models. 


> In delicate scenarios, being certain of the path the model takes to arrive at a decision is necessary to rule out algorithmic bias due to training data.


The need for interpretability is also due to incompleteness in the problem statement as elaborated by Doshi-Velez and Kim(2017)[^4]. Some situations such as movie recommender systems do not require an explanation due to the simple fact that the output does not have a significant effect on a human, while a recidivism prediction system should justify its conclusion to rule out any bias, say, on racial grounds. The problem statement here would not only involve predictions, but also an explanation of the reason behind such a prediction due to its impact on human life.

Building on this, the “European Union Regulations on Algorithmic Decision Making and A Right to Explanation” by Bryce Goodman and Seth Flaxman, dictates a “right to explanation”. Hence, interpretable models seem to be the need of the hour. 


> Considering the widespread penetration of machine learning in day-to-day life, a natural question arises: Can you trust the model? 


This can be perceived on two levels, trusting a model and trusting an individual prediction. One prerequisite to trust, whether towards a model or a prediction is understanding/knowledge of its behaviour, which is where techniques such as LIME (Local Interpretable Model-Agnostic Explanation) come in handy [^5]. As elaborated in the cited paper, LIME attempts to explain a prediction by presenting a simple model in the neighbourhood of the instance in question. 

An interesting example provided in this paper takes the case of a text classifier that uses SVM’s on a subset of the 20 group dataset to differentiate ‘Atheism’ from ‘Christianity’. The accuracy rate was very high, but the LIME technique reported that the decision was made for random reasons like the occurrence of words that have no connection with either classification. It is tempting to use a model with such a high accuracy until we discover the reason behind the model's decisions. Hence, high accuracy on the test set does not always assure that a model will perform well. 

> Techniques such as LIME can be used together with these models to assess the prediction and encourage trust among users. 

Model audits are another way to ensure trust since audits give a sense of the reliability of the model. One such example is the Resampling Uncertainty Estimation (RUE), an algorithm that addresses reliability by creating “an ensemble of predictions” and “estimates the amount that a prediction would change if the model had been fit on different training data” [^6]. 

> RUE is one among many algorithms that seek to audit models, a prominent feature is the fact that it audits after learning and provides an uncertainty score for each prediction. 

So far, this essay has discussed trust based on an understanding of the inner workings of algorithms and on the basis of a framework that would measure reliability through uncertainty scores calculated during the testing phase. At this point, taking a step back to compare the decision-making skills of a model against a human’s thought process can also be treated as a component that goes into trusting it. Is the user of the model comfortable in giving up control of the situation? Would a human truly perform better in cases that involve racial and gender bias? In a situation like this, a model may come to a conclusion similar to the one that a human would arrive at, simply because the dataset may reflect a human’s prejudice. 

> Another aspect of trust would mean that we can rely on a model’s decisions if a human could make the same error.[^2]

We can conclude this discussion with an important point. Trusting a model depends largely on its use case. When it is a low-stakes situation such as a product recommendation system, an incorrect prediction would at best waste a few minutes of a user’s time. In higher impact situations, it seems very risky to have blind faith in the model due to issues such as dataset shift [^7].  

Again, while model interpretability techniques do provide an insight into how models work, they also fulfil human curiosity. Since the beginning of time, humans have tried to deepen their understanding of the universe and it is natural to have questions about the black-box implementation of some models. Understanding the reasoning behind a decision will also lead to greater societal acceptance towards machine learning and artificial intelligence. 


All in all, any advance in explainable machine learning models would lead to the capabilities of AI being leveraged in every field, as people would encourage the use of transparent systems. Further, this would accelerate the research in the field of data science as a whole. 

### References

[^1]: Carvalho, D. V., Pereira, E. M., & Cardoso, J. S. (2019). Machine learning interpretability: A survey on methods and metrics. Electronics, 8(8), 832.
[^2]: Lipton, Z. C. (2018). The Mythos of Model Interpretability: In machine learning, the concept of interpretability is both important and slippery. Queue, 16(3), 31-57.
[^3]: Linardatos, P., Papastefanopoulos, V., & Kotsiantis, S. (2021). Explainable AI: A Review of Machine Learning Interpretability Methods. Entropy, 23(1), 18.

[^4]: Doshi-Velez, F., & Kim, B. (2017). Towards a rigorous science of interpretable machine learning. arXiv preprint arXiv:1702.08608.
[^5]: Ribeiro, M. T., Singh, S., & Guestrin, C. (2016, August). " Why should i trust you?" Explaining the predictions of any classifier. In Proceedings of the 22nd ACM SIGKDD international conference on knowledge discovery and data mining (pp. 1135-1144).
[^6]: Schulam, P., & Saria, S. (2019, April). Can you trust this prediction? Auditing pointwise reliability after learning. In The 22nd International Conference on Artificial Intelligence and Statistics (pp. 1022-1031). PMLR.
[^7]: Moreno-Torres, J. G., Raeder, T., Alaiz-Rodríguez, R., Chawla, N. V., & Herrera, F. (2012). A unifying view on dataset shift in classification. Pattern recognition, 45(1), 521-530.

[^8]: Molnar, Christoph. "Interpretable machine learning. A Guide for Making Black Box Models Explainable", 2019. Interpretable Machine Learning Book.

