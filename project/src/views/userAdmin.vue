<template>
  <div id="center">
    <div class="container">
      <div class="intro">
        <h1>회원관리</h1>
        <hr />
      </div>

      <div
        style="
          border: 1px gainsboro solid;
          padding: 30px 15px 30px 15px;
          border-radius: 5px;
        "
      >
        <div style="text-align: left; display: inline-block">
          <span style="font-size: 15pt; display: inline-block">고객검색</span
          >&nbsp;&nbsp;&nbsp;
          <input type="text" style="border-radius: 5px" />&nbsp;&nbsp;&nbsp;
          <button>검색</button>
        </div>
        <br /><br /><br />
        <div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <router-link
                    to="/userdetail"
                    class="nav-link"
                    aria-current="page"
                    style="h"
                  >
                    Mark</router-link
                  >
                </td>

                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <div style="display: flex; justify-content: center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
<style>
.container {
  text-align: center;
  padding: 0 80px;
}

.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
}
</style>
