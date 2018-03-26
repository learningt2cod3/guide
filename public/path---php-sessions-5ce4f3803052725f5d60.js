webpackJsonp([0xc33358d5c79c4000],{"./node_modules/json-loader/index.js!./.cache/json/php-sessions.json":function(s,n){s.exports={data:{markdownRemark:{html:'<h2>Sessions</h2>\n<p>Sessions are a feature in PHP that allow you to store data server side about a user. When a session is setup, a browser cookie is set which identifies the user to PHP so the PHP knows which server side variables to access.</p>\n<h3>Starting A Session</h3>\n<p>On every page you want to access the session you will need to start (or load) the session. To do so run the <code>session_start()</code> function which loads the PHP Session System.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Accessing And Setting Data In A Session</h3>\n<p>The <code>$_SESSION[\'key\']</code> variable is a special type of array (using a browser cookie to determine which session to access).</p>\n<p>In the below example you see the user’s choice of theme is set to theme number one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string">\'themechoice\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Accessing a session variable is similar to setting one. Simply include the variable where it needs to be accessed. For example echoing it out as shown in the code example below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">echo</span> <span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string">\'themechoice\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Removing A Session</h3>\n<p>To remove a session from the system run the following PHP code. It will unset the session variables and delete it from the system.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token function">session_unset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">session_destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Sessions Are Temporary</h3>\n<p>It is important to not treat a session as permanent storage. They get cleared from time to time by the developer, whenever the application is moved to a new host server, by the application itself (for example a logout button), and even during server maintenance. For long term storage of data make sure to use a database.</p>\n<h3>Security</h3>\n<p>Last but not least it’s important to use php sessions securely. Read our article on <a href="/php/security/session-identifier-acquirement">Session Identifier Acquirement</a> and <a href="/php/security/session-hijacking">Session Hijacking</a> for more information.</p>\n<h4>More Information:</h4>\n<ul>\n<li><a href="https://secure.php.net/manual/en/book.session.php">php.net session manual</a></li>\n</ul>',fields:{slug:"/php/sessions/"},frontmatter:{title:"Sessions"}}},pathContext:{slug:"/php/sessions/"}}}});
//# sourceMappingURL=path---php-sessions-5ce4f3803052725f5d60.js.map