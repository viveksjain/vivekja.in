likes = ["build stuff", "write code", "break things", "break things", "fix things", "ride my bicycle", "learn", "read"];
likeIndex = 0;
function incLike(num) {
	likeIndex = (likeIndex + num) % likes.length;
	if (likeIndex < 0) likeIndex += likes.length;
	document.getElementById("likes").innerHTML = likes[likeIndex];
}
