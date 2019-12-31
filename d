[1mdiff --git a/index.html b/index.html[m
[1mindex 863bdde..daba042 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -17781,28 +17781,16 @@[m [mcustom_copy($src, $dst);[m
 		</div> <!-- entry END -->[m
 [m
 		<div class="entry">[m
[31m-			<div class="entry-title"></div>[m
[31m-			<div class="entry-keywords"></div>[m
[32m+[m			[32m<div class="entry-title">PHP destroy session</div>[m
[32m+[m			[32m<div class="entry-keywords">php, cookie, session_destroy(), setcookie, PHPSESSID, phpsessid, delete, remove, erase, obrisati</div>[m
 			<div class="entry-text">[m
 [m
[31m-				<table cellpadding="5px" border="1px solid black">[m
[31m-					<tr>[m
[31m-						<td></td>[m
[31m-						<td></td>[m
[31m-					</tr>[m
[31m-				</table>[m
[31m-[m
[31m-				<p><span class="grayback"></span></p>[m
[31m-[m
[31m-				<p><a target="_blank" href=""></a></p>[m
[31m-[m
[31m-				<ul>[m
[31m-					<li></li>[m
[31m-					<li></li>[m
[31m-					<li></li>[m
[31m-				</ul>[m
[32m+[m				[32m<p><span class="grayback"></span>Kad se unistava sesija, korisno je obrisati i session cookie.</p>[m
 [m
 <code>[m
[32m+[m[32msession_destroy().[m
[32m+[m[32msetcookie(“PHPSESSID”, “”, time(), “/”);[m
[32m+[m
 </code>[m
 [m
 			</div> <!-- entry-text END -->[m
