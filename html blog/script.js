
const emojiButtons = document.querySelectorAll('.emoji-btn');
emojiButtons.forEach(button => {
  const emoji = button.dataset.emoji;
  const savedCount = localStorage.getItem(`reaction-${emoji}`) || 0;
  button.querySelector('span').textContent = savedCount;

  button.addEventListener('click', () => {
    let currentCount = parseInt(localStorage.getItem(`reaction-${emoji}`) || 0);
    currentCount += 1;
    localStorage.setItem(`reaction-${emoji}`, currentCount);
    button.querySelector('span').textContent = currentCount;
  });
});


function postComment() {
  const input = document.getElementById("comment-input");
  const commentText = input.value.trim();

  if (commentText !== "") {
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    comments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(comments));
    input.value = "";
    displayComments();
  }
}


function displayComments() {
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = "";
  const comments = JSON.parse(localStorage.getItem("comments") || "[]");
  comments.forEach(comment => {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.textContent = comment;
    commentsList.appendChild(commentDiv);
  });
}


window.onload = displayComments;
