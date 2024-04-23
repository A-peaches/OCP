<template>
  <div id="center">
    <div class="container" style="display: flex; justify-content: center">
      <div class="intro" style="width: 100%">
        <h1>고객상세</h1>
        <hr />
        <div style="margin: 100px 0 100px">
          <div id="divadmin-user">
            <h4 style="text-align: left">회원정보</h4>
            <hr />
            <i class="bi bi-person-circle" style="font-size: 80pt"></i>
            <button>+</button>

            <br /><br />
            <div style="display: flex; justify-content: center">
              <table class="table">
                <tr>
                  <td scope="col">회원이름</td>
                  <td scope="col" colspan="3">회원이름</td>
                </tr>
                <tr>
                  <td scope="col">ID</td>
                  <td scope="col" colspan="3">ID</td>
                </tr>
                <tr>
                  <td scope="col">닉네임</td>
                  <td scope="col" colspan="3">닉네임</td>
                </tr>
                <tr>
                  <td scope="col">연락처</td>
                  <td scope="col" colspan="3">연락처</td>
                </tr>
                <tr>
                  <td scope="col">이메일</td>
                  <td scope="col" colspan="3">이메일</td>
                </tr>
                <tr>
                  <td scope="col">고객등급</td>
                  <td scope="col" colspan="3">고객등급</td>
                </tr>
              </table>
            </div>
          </div>
          <div id="divadmin-user" style="margin-top: 50px">
            <h4>관리자 메모</h4>

            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
          </div>
          <div style="border: 1px black solid"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#divadmin-user {
  border: 1px black solid;
  border-radius: 20px;
  display: inline-block;
  width: 100%;
  margin-right: 50px;
  text-align: center;
  padding: 20px 20px 20px 20px;
}
</style>
