webpackJsonp([0xaac1eefd347da800],{"./node_modules/json-loader/index.js!./.cache/json/algorithms-algorithm-performance.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>In mathematics, big-O notation is a symbolism used to describe and compare the <em>limiting behavior</em> of a function.<br>\nA function’s limiting behavior is how the function acts as it trends towards a particular value and in big-O notation it is usually as it trends towards infinity.<br>\nIn short, big-O notation is used to describe the growth or decline of a function, usually with respect to another function.</p>\n<p>NOTE: x^2 is equivalent to x * x or ‘x-squared’]</p>\n<p>For example we say that x = O(x^2) for all x > 1 or in other words, x^2 is an upper bound on x and therefore it grows faster.<br>\nThe symbol of a claim like x = O(x^2) for all x > <em>n</em> can be substituted with x &#x3C;= x^2 for all x > <em>n</em> where <em>n</em> is the minimum number that satisfies the claim, in this case 1.<br>\nEffectively, we say that a function f(x) that is O(g(x)) grows slower than g(x) does.</p>\n<p>Comparitively, in computer science and software development we can use big-O notation in order to describe the time complexity or efficiency of algorithms<br>\nSpecifically when using big-O notation we are describing the efficiency of the algorithm with respect to an input: <em>n</em>, usually as <em>n</em> approaches infinity.<br>\nWhen examining algorithms, we generally want a lower time complexity, and ideally a time complexity of O(1) which is constant time.<br>\nThrough the comparison and analysis of algorithms we are able to create more efficient applications.</p>\n<h2>Examples</h2>\n<p>As an example, we can examine the time complexity of the <a href=\'https://github.com/FreeCodeCamp/wiki/blob/master/Algorithms-Bubble-Sort.md#algorithm-bubble-sort\' target=\'_blank\' rel=\'nofollow\'>[bubble sort]</a> algorithm and express it using big-O notation.</p>\n<h4>Bubble Sort:</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token comment" spellcheck="true">// Function to implement bubble sort</span>\n    <span class="token keyword">void</span> <span class="token function">bubble_sort</span><span class="token punctuation">(</span>int array<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">\'http://bigocheatsheet.com/\'</span> target<span class="token operator">=</span><span class="token string">\'_blank\'</span> rel<span class="token operator">=</span><span class="token string">\'nofollow\'</span><span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">,</span> int n<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// Here n is the number of elements in array</span>\n        int temp<span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token number">-1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment" spellcheck="true">// Last i elements are already in place</span>\n            <span class="token keyword">for</span><span class="token punctuation">(</span>int j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token operator">-</span>i<span class="token number">-1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n                <span class="token punctuation">{</span>\n                    <span class="token comment" spellcheck="true">// swap elements at index j and j+1</span>\n                    temp <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Looking at this code, we can see that in the best case scenario where the array is already sorted, the program will only make <em>n</em> comparisons as no swaps will occur.<br>\nTherefore we can say that the best case time complexity of bubble sort is O(<em>n</em>).</p>\n<p>Examining the worst case scenario where the array is in reverse order, the first iteration will make <em>n</em> comparisons while the next will have to make <em>n</em> - 1 comparisons and so on until only 1 comparison must be made.<br>\nThe big-O notation for this case is therefore <em>n</em> * [(<em>n</em> - 1) / 2] which = 0.5<em>n</em>^2 - 0.5<em>n</em> = O(<em>n</em>^2) as the <em>n</em>^2 term dominates the function which allows us to ignore the other term in the function.</p>\n<p>We can confirm this analysis using [this handy big-O cheat sheet</a> that features the big-O time complexity of many commonly used data structures and algorithms</p>\n<p>It is very apparent that while for small use cases this time complexity might be alright, at a large scale bubble sort is simply not a good solution for sorting.<br>\nThis is the power of big-O notation: it allows developers to easily see the potential bottlenecks of their application, and take steps to make these more scalable.</p>\n<p>For more information on why big-O notation and algorithm analysis is important visit this <a href=\'https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care\' target=\'_blank\' rel=\'nofollow\'>video challenge</a>!</p>',fields:{slug:"/algorithms/algorithm-performance/"},frontmatter:{title:"Algorithm Performance"}}},pathContext:{slug:"/algorithms/algorithm-performance/"}}}});
//# sourceMappingURL=path---algorithms-algorithm-performance-eaaf7b6d43a14e1cb54a.js.map