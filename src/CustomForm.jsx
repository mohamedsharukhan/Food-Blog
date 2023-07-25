import { useForm } from "react-hook-form";

function CustomForm() {
  const { register, handleSubmit } = useForm();

  function getFormData(data) {
    console.log(data);
  }
  return (
    <>
      {/* <form onSubmit={handleSubmit(getFormData)} >

<input type='text' {...register('username')} />
<input type='text' {...register('email')} />
<input type='submit' />

</form> */}

      {/* modal */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="contoainer loginPage">
                <div className="row">
                  <div className="col-12">
                    <h1>Login</h1>
                  </div>

                  <form onSubmit={handleSubmit(getFormData)}>
                    <div className="col-12 ">
                      <input
                        type="text"
                        placeholder="First name"
                        {...register("First name", {
                          required: true,
                          maxLength: 9,
                          minLength: 3,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />

                      {/* <input type="text"  {...register('email', {required:true})} /> */}
                    </div>

                    <div className="col-12 password">
                      <input
                        type="password"
                        {...register("password", { required: true })}
                      />
                    </div>

                    <div className="col-12  ">
                      <button type="submit" className="btnSubmit">
                        Submit
                      </button>
                    </div>

                    <div className="col-12">
                      <input type="checkbox" />
                      <label htmlFor="">Remember</label>
                    </div>

                    <div className="col-12">
                      <button type="button" className="btnForget">
                        {" "}
                        Forget
                      </button>
                    </div>

                    <div className="col-12">
                      <button type="button" className="btnJoin">
                        {" "}
                        Join Us !
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer closeBtnDiv">
              <button
                type="button"
                className="btn btn-secondary closeBtn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomForm;
