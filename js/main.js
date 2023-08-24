const posts = [
  {
    id: 1,
    userImg: 'https://icon-library.com/images/user-image-icon/user-image-icon-2.jpg',
    userName: 'Ahmed Helmy',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/1',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 2,
    userImg: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    userName: 'Ahmed Yousry',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/2',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 3,
    userImg: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png',
    userName: 'Amr ElNagdy',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/3',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 4,
    userImg: 'https://cdn-icons-png.flaticon.com/512/1487/1487098.png',
    userName: 'Mohamed Nasser',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/4',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 5,
    userImg: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
    userName: 'Nawal Zaki',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/5',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 6,
    userImg: 'https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png',
    userName: 'Mohamed Abdullah',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/6',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 7,
    userImg: 'https://cdn-icons-png.flaticon.com/512/2342/2342011.png',
    userName: 'Mirhan Mohamed',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/7',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 8,
    userImg: 'https://cdn3.iconfinder.com/data/icons/business-vol-26/100/Artboard_2-512.png',
    userName: 'Sara Salah',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/8',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 9,
    userImg: 'https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png',
    userName: 'Mohamed Helmy',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/9',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  },
  {
    id: 10,
    userImg: 'https://cdn-icons-png.flaticon.com/512/1754/1754623.png',
    userName: 'Ahmed Ahmed',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore dicta dolore fugit aliquid nihil, excepturi molestias sed quaerat reiciendis.',
    postImage: 'https://source.unsplash.com/random/10',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  }
]

function displayPosts() {
  let counter = ``;
  for (let post of posts) {
    counter += `
      <!-- author -->
      <div class="d-flex justify-content-between">
        <!-- avatar -->
        <div class="d-flex">
          <img src="${post.userImg}" alt="avatar" class="rounded-circle me-2"
            style="width: 38px; height: 38px; object-fit: cover" />
          <div>
            <p class="m-0 fw-bold">${post.userName}</p>
            <span class="text-muted fs-7">${post.postHistory}</span>
          </div>
        </div>
      </div>
      <!-- post content -->
      <div class="mt-3">
        <!-- content -->
        <div>
          <p>${post.postContent}</p>
          <img src="${post.postImage}" alt="post image" class="img-fluid rounded" />
        </div>
        <!-- likes & comments -->
        <div class="post__comment mt-3 position-relative">
          <!-- likes -->
          <div class=" d-flex align-items-center top-0 start-0" style="height: 50px; z-index: 5">
            <div class="me-2">
              <i class="text-primary fas fa-thumbs-up"></i>
              <i class="text-danger fab fa-gratipay"></i>
              <i class="text-warning fas fa-grin-squint"></i>
            </div>
            <p class="m-0 text-muted fs-7">Phu, Tuan, and ${post.likesCounter - 2} others</p>
          </div>
          <!-- comments start-->
          <div class="accordion" id="accordionExample">
            <div class="accordion-item border-0">
              <!-- comment collapse -->
              <h2 class="accordion-header" id="headingTwo">
                <div class="accordion-button collapsed pointer d-flex justify-content-end" data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false" aria-controls="collapsePost1">
                  <p class="m-0">2 Comments</p>
                </div>
              </h2>
              <hr />
              <!-- comment & like bar -->
              <div class="d-flex justify-content-around mb-4">
                <div class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1" onclick="handleLike(${post.id})">
                  <i class="fas fa-thumbs-up me-3" style="color:${post.isLiked ? "#0D6EFD" : "#595C5F"}"></i>
                  <p class="m-0" style="color:${post.isLiked ? "#0D6EFD" : "#595C5F"}">Like</p>
                </div>
                <div class=" dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1" data-bs-toggle="collapse" data-bs-target="#collapsePost1" aria-expanded="false"aria-controls="collapsePost1">
                  <i class="fas fa-comment-alt me-3" ></i>
                  <p class="m-0">Comment</p>
                </div>
              </div>
              <!-- comment expand -->
              <div id="collapsePost1" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <hr />
                <div class="accordion-body">
                  <!-- comment 1 -->
                  <div class="d-flex align-items-center my-1">
                    <!-- avatar -->
                    <div>
                  </div>
                    <!-- comment text -->
                    <div class="p-3 rounded comment__input w-100">
                      <!-- comment menu of author -->
                      <div class="d-flex justify-content-end">
                        <!-- icon -->
                        <i class="fas fa-ellipsis-h text-blue pointer" id="post1CommentMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <!-- menu -->
                        <ul class="dropdown-menu border-0 shadow" aria-labelledby="post1CommentMenuButton">
                          <li class="d-flex align-items-center">
                            <a class=" dropdown-item d-flex justify-content-around align-items-center fs-7" href="#">
                              Edit Comment</a>
                          </li>
                          <li class="d-flex align-items-center">
                            <a class=" dropdown-item d-flex justify-content-around align-items-center fs-7" href="#">Delete Comment</a>
                          </li>
                        </ul>
                      </div>
                      <p class="fw-bold m-0">John</p>
                      <p class="m-0 fs-7 bg-gray p-2 rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <!-- comment 2 -->
                  <div class="d-flex align-items-center my-1">
                    <!-- avatar -->
                    <img src="https://source.unsplash.com/random/2" alt="avatar" class="rounded-circle me-2"
                      style=" width: 38px; height: 38px; object-fit: cover;" />
                    <!-- comment text -->
                    <div class="p-3 rounded comment__input w-100">
                      <p class="fw-bold m-0">Jerry</p>
                      <p class="m-0 fs-7 bg-gray p-2 rounded"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <!-- create comment -->
                  <form class="d-flex my-1">
                    <!-- avatar -->
                    <!-- input -->
                    <input type="text" class="form-control border-0 rounded-pill bg-gray"
                      placeholder="Write a comment" />
                  </form>
                  <!-- end -->
                </div>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>`
  }
  document.getElementById('post').innerHTML = counter;
}
displayPosts();

function addPost() {
  const newPost =document.getElementById('post-content').value;

  posts.push({
    id: 11,
    userImg: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    userName: 'john',
    postHistory: (function (start, end) {
      return new Date(start.getTime() + Math.random() * (start.getTime() - end.getTime()));
    })(new Date(2023, 8, 23), new Date()),
    postContent: `${newPost}`,
    postImage: 'https://source.unsplash.com/random/2',
    comment: [],
    likesCounter: 54,
    isLiked: false,
  });
  updatePostDisplay();
}

function updatePostDisplay() {
  const postContainer = document.getElementById("post");
  postContainer.innerHTML = "";

  posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
          <p>${post.content}</p>
          <small>${post.timestamp}</small>
      `;
      postContainer.appendChild(postElement);
  });
}

const postForm = document.getElementById("postForm");
postForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const postContent = document.getElementById("postContent").value;
    if (postContent.trim() !== "") {
        addPost(postContent);
        document.getElementById("postContent").value = "";
    }
});

function handleLike(id) {
  posts.forEach(p => {
    if (p.id == id) {
      if (p.isLiked) {
        p.likesCounter--;
        p.isLiked = false
      } else {
        p.likesCounter++;
        p.isLiked = true
      }
      displayPosts()
    }
  });
}

// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// Gender Select
if (window.location.pathname === "/") {
  const radioBtn1 = document.querySelector("#flexRadioDefault1");
  const radioBtn2 = document.querySelector("#flexRadioDefault2");
  const radioBtn3 = document.querySelector("#flexRadioDefault3");
  const genderSelect = document.querySelector("#genderSelect");

  radioBtn1.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn2.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn3.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
  });
}

// Function to validate the login form
function validateLoginForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  const email = document.getElementById('main-email').value;
  const password = document.getElementById('main-password').value;

  if (email !== localStorage.getItem('email') || password !== localStorage.getItem('password')) {
    alert('Invalid email or password');
    return false;
  }

  alert('Login Successful')
  window.open('feed.html')
  return true;
}

const loginForm = document.getElementById('main-form');
loginForm.addEventListener('submit', validateLoginForm);