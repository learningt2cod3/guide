webpackJsonp([0xdc3311ff8e612800],{"./node_modules/json-loader/index.js!./.cache/json/vim-motions.json":function(e,o){e.exports={data:{markdownRemark:{html:'<h1>Vim Basic Motions</h1>\n<h3>Cursors motions</h3>\n<p>First in VIM we can use the arrow keys if we like to move around the text file, but it is not the best way to do so,\nand we lost the advantage of combine commands that VIM provides.</p>\n<p>Instead of that the default and best way to move throught the text is using the keys <code>h</code>(left), <code>j</code>(down), <code>k</code>(up) and <code>l</code>(right).</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>     ^ \n     |\n     k\n<- h   l ->\n     j\n     |\n     v</code></pre>\n      </div>\n<p>The advantage in use this keys instead of the arrow keys, is you can combine motions with other commands, like:</p>\n<ul>\n<li><code>d2j</code> -> delete 2 lines down</li>\n<li><code>y10k</code> -> copy 10 lines up</li>\n<li><code>10l</code> -> move 10 caracters right</li>\n<li><code>2h</code>  -> move 2 characters left</li>\n</ul>\n<h3>Words Motions</h3>\n<p>A word consists of a sequence of letters, digits and underscores, or a\nsequence of other non-blank characters, separated with white space (spaces,\ntabs, end of line).  An empty line is also considered to be a word.</p>\n<p>It is possible move throught words with this commnads:</p>\n<ul>\n<li><code>w</code> -> move to next word</li>\n<li><code>W</code> -> move to next <strong>WORD*</strong> </li>\n<li><code>e</code> -> move to the end of the next word</li>\n<li><code>E</code> -> move to the end of the next <strong>WORD</strong></li>\n<li><code>b</code> -> move to previous word </li>\n<li><code>B</code> -> move to previous <strong>WORD</strong></li>\n<li><code>ge</code> -> move to the end of previous word</li>\n<li><code>gE</code> -> move to the end of previous <strong>WORD</strong></li>\n</ul>\n<p>*A <strong>WORD</strong> consists of a sequence of non-blank characters, separated with white\nspace.  An empty line is also considered to be a <strong>WORD</strong>, ie: <code>quux(foo,</code> <code>bar,</code> <code>foo);</code></p>\n<p>With this motions combined with other commands you can do things like:</p>\n<ul>\n<li><code>dw</code> -> delete the word</li>\n<li><code>5e</code> -> move to the end of the 5th word from here</li>\n</ul>\n<h3>Search motions</h3>\n<p>Another way to move throught the position you like, is using the search motions, the search motions consists in the\nmotion + a character to search</p>\n<ul>\n<li><code>fx</code> -> move to the next <code>x</code></li>\n<li><code>tx</code> -> move to first position before the next <code>x</code></li>\n<li><code>;</code> -> next x</li>\n<li><code>Fx</code> -> move to the previous <code>x</code></li>\n<li><code>Tx</code> -> move to first position after the previous <code>x</code></li>\n<li><code>,</code> -> previous x</li>\n</ul>\n<h3>Begin and End of lines</h3>\n<p>  You can also move to begin or end of line with VIM, with this commands:</p>\n<ul>\n<li><code>0</code> -> Begin of the line</li>\n<li><code>^</code> -> First non-black character of the line</li>\n<li><code>$</code> -> End of the line</li>\n</ul>\n<h3>File motions</h3>\n<p>In VIM you can move throught the file using this commands:</p>\n<ul>\n<li><code>gg</code> -> move to the first line of the file</li>\n<li><code>G</code> -> move to the last line of the file</li>\n<li><code>&#x3C;ctrl> + f</code> -> move one page down</li>\n<li><code>&#x3C;ctrl> + b</code> -> move one page up</li>\n<li><code>/text</code> -> find <code>text</code></li>\n<li><code>n</code> -> move to the next occurrence of the <code>text</code> (previous command)</li>\n<li><code>?text</code> -> find previous <code>text</code> </li>\n<li><code>N</code> -> move to the previous occurrence of <code>text</code></li>\n<li><code>{</code> -> move one paragraph up</li>\n<li><code>}</code> -> move one paragraph down</li>\n<li><code>(</code> -> move one sentence up</li>\n<li><code>)</code> -> move one sentece down</li>\n<li><code>#</code> -> find word under cursor up</li>\n<li><code>*</code> -> find word under cursor down</li>\n</ul>',fields:{slug:"/vim/motions/"},frontmatter:{title:"Motions"}}},pathContext:{slug:"/vim/motions/"}}}});
//# sourceMappingURL=path---vim-motions-2e7580da491a610902e6.js.map