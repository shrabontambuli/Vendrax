import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const AddProduct = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const title = data.title;
        const brand = data.brand;
        const price = parseFloat(data.price);
        const stock = parseFloat(data.stock);
        const category = data.category;
        const imageURL = data.imageURL;
        const sellerEmail = data.email;
        const description = data.description;

        const product = {
            title,
            brand,
            price,
            stock,
            category,
            imageURL,
            sellerEmail,
            description
        };

        const token = localStorage.getItem('access-token');

        axios.post('http://localhost:5000/add-products', product, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Add product Successful!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };


    return (
        <div>
            <h1 className="text-4xl font-medium text-center">Add Products</h1>

            {/* Form to add product */}

            <div className="my-8">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="flex gap-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Product title" className="input input-bordered" {...register('title', { required: true })} />
                            {errors.title && (<p className='text-red-500 font-light mt-2'> Product title is required</p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" placeholder="Product Brand" className="input input-bordered" {...register('brand', { required: true })} />
                            {errors.brand && (<p className='text-red-500 font-light mt-2'> Brand name is required</p>)}
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Product price" className="input input-bordered" {...register('price', { required: true })} />
                            {errors.price && (<p className='text-red-500 font-light mt-2'> Product price is required</p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input type="number" placeholder="Product stock" className="input input-bordered" {...register('stock', { required: true })} />
                            {errors.stock && (<p className='text-red-500 font-light mt-2'> Product stock is required</p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Product category" className="input input-bordered" {...register('category', { required: true })} />
                            {errors.category && (<p className='text-red-500 font-light mt-2'> Product category is required</p>)}
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="Product image url" className="input input-bordered" {...register('imageURL', { required: true })} />
                            {errors.imageURL && (<p className='text-red-500 font-light mt-2'> Product imageURL is required</p>)}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <select className="select select-bordered"
                                {...register("email", { required: true })}>
                                <option value={user.email}>{user.email}</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea type="text" placeholder="Product description" className="textarea textarea-bordered" {...register('description', { required: true })} />
                        {errors.description && (<p className='text-red-500 font-light mt-2'> Product description is required</p>)}
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;