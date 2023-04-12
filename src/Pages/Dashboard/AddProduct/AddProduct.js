import React, { useState } from "react";
import { useForm } from "react-hook-form";
import generator from "generate-password";
import swal from "sweetalert";

const AddProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const [pass, setPass] = useState();
  // const [key, setKey] = useState("");

  const generatePassword = () => {
    const pwd = generator.generate({
      length: 10,
      lowercase: false,
      uppercase: true,
      numbers: true,
      symbols: false,
    });
    setPass(pwd);
  };
  const onSubmit = (data) => {
    data.key = pass;
    console.log(data);
    fetch("https://kitty-city-server.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Product Added Successfully!",
            text: `Product Unique Key: ${pass}`,
            icon: "success",
            button: "OK!",
          });
        }
      });
    reset();
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center">Add a Product</h1>
      <div>
        <div className="d-flex justify-content-center">
          <form className="mt-4 w-75" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label className="mb-2">Product Name*</label> <br />
                  <input
                    className="form-control shadow-none"
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Product Name"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-2">Price*</label> <br />
                  <input
                    className="form-control shadow-none"
                    type="number"
                    {...register("price", { required: true })}
                    placeholder="450"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label className="mb-2">Product Img URL*</label> <br />
                  <input
                    className="form-control shadow-none"
                    type="text"
                    {...register("img1", {
                      required: true,
                    })}
                    placeholder="Img Should Be 600px * 600px"
                  />
                </div>
                <div className="mb-2">
                  <label className="mb-2">Category</label> <br />
                  <input
                    className="form-control shadow-none"
                    type="text"
                    {...register("category")}
                    placeholder="Product Category"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="col-12 mb-2">
                <label className="mb-2">Category*</label> <br />
                <textarea
                  className="form-control shadow-none"
                  type="text"
                  {...register("des", {
                    required: true,
                  })}
                  placeholder="Product Description . . ."
                  rows="5"
                />
              </div>
            </div>
            <div onClick={generatePassword} className="text-center">
              <input
                className="btn btn-primary py-3 px-4 shadow-none rounded-pill fw-bold py-2 px-3"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
