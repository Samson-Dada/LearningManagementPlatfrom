// const dashboardResourceDetail = document.querySelector(".resources__content-detail");

// const resourceIcon = document.querySelector(".resource-svg-active");
// console.log(dashboardResourceDetail);

// function displayResources() {
//   dashboardResourceDetail.classList.toggle("resources__content-detail-active");
// }
// resourceIcon.addEventListener("click", displayResources);

///

// All course html, course card display//

async function getCourseDataHandler() {
  const response = await fetch("./js/course_data.json", { method: "GET" });
  const data = await response.json();
  data.map((dataContent, arr) => {
    const courseHTML = `
<a href="course.html" class="course-page__card">
            <div class="course-page__image-${dataContent.id}"></div>
            <svg class="course-page__icon svg-white"><use xlink:href="svg/Material-icon.svg#icon-play_circle_outline"></use></svg>
            <div class="course-page__content">
              <div class="course-page__body">
                <div class="course-page__header">
                  <p>
                    <span class="course-page__title">
                 ${dataContent.course_title}
                    </span>
                    <span class="course-page__author">${dataContent.course_author}</span>
                  </p>
                  <svg class="svg-orange-round">
                    <use xlink:href="svg/Material-icon.svg#icon-add_shopping_cart"></use>
                  </svg>
                </div>
                <p class="course-page__details">
                 ${dataContent.course_body}
                </p>
              </div>
              <div class="course-page__feature">
                <p class="course-page__feature-icon">
                  <svg class="svg svg-gray-light"><use xlink:href="svg/Material-icon.svg#icon-access_time"></use></svg>
                  <span>${dataContent.course_stage}<span>hour</span></span>
                </p>
                <p class="course-page__feature-icon">
                  <svg class="svg svg-gray-light"><use xlink:href="svg/Material-icon.svg#icon-library_books"></use></svg> <span>
                 ${dataContent.course_duration}
                  
                  </span>
                </p>
                <p class="course-page__feature-icon">
                  <svg class="svg svg-gray-light">
                    <use xlink:href="svg/Material-icon.svg#icon-person_outline"></use>
                  </svg>
                  <span>${dataContent.course_level}</span>
                </p>
              </div>
              <div class="course-page__footer">
                <p class="course-page__price">
                  <span>${dataContent.course_discount_price}</span>
                  <span>${dataContent.course_original_price}</span>
                </p>
                <button class="course-page__btn">Buy Now</button>
              </div>
            </div>
          </a>

  `;

    const courseContainer = document.querySelector(".course-page__container");
    courseContainer.insertAdjacentHTML("beforeend", courseHTML);
  });
}

getCourseDataHandler();
