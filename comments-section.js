fetch("./data.json")
  .then((response) => response.json())
  .then((json) => console.log(json));

// create comment div

{
  /* <div class="comment">
        <p">comment by amyrobson</p>
        <button>+</button> <span>votes</span><button>-</button>
        <button>Reply</button>
      </div> */
}

// Create new comment
const commentDiv = document.createElement("div");
const newContent = document.createTextNode("Hello World");
commentDiv.appendChild(newContent);

// create parag. tag
const commentParagraph = document.createElement("p");
const newComment = document.createTextNode("Hello again!");
commentParagraph.appendChild(newComment);

// create vote buttons
const upvoteButton = document.createElement("button");
const plusSign = document.createTextNode("+");
upvoteButton.appendChild(plusSign);

const downvoteButton = document.createElement("button");
const minusSign = document.createTextNode("-");
downvoteButton.appendChild(minusSign);

//create reply button
const replyButton = document.createElement("button");
const reply = document.createTextNode("Reply");
replyButton.appendChild(reply);

// put parag. tag & buttons inside comment-container

// Put comment in container
const commentContainer = document.querySelector(".comment-container");
commentContainer.append(commentDiv);
commentContainer.append(commentParagraph);
commentContainer.append(upvoteButton);
commentContainer.append(downvoteButton);
commentContainer.append(replyButton);
//
