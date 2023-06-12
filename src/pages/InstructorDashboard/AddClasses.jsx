import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import CommonButton from '../../Components/CommonButton/CommonButton';

const AddClasses = () => {


	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const onSubmit = data => {
		console.log(data)
		const classData = data;
		fetch('https://music-camp-server.vercel.app/classes', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(classData)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					reset()
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Class added',
						showConfirmButton: false,
						timer: 1500
					})
					// navigate('/')
				}
			})

	};
	return (
		<>
			<div className="hero  bg-base-200">
				<div className="hero-content flex-col">
					<div className="text-left">
						<h1 className="text-3xl font-bold">Add A New Class</h1>
					
					</div>

					<div className="card flex-shrink w-full shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit(onSubmit)} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Class Name</span>
								</label>
								<input type="text" {...register("name", { required: true })} name='name' className="input input-bordered" />
								{errors.className && <span className='text-red-600'>Class Name is required</span>}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input type="text" {...register("image", { required: true })} className="input input-bordered" />
								{errors.classPhotoURL && <span className='text-red-600'>Class Photo URL is required</span>}
							</div>
							<div className='flex '>
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Instructor Name</span>
									</label>
									<input type="text" {...register("instructor", { required: true })} name='instructor' className="input input-bordered" />
									{errors.instructorName && <span className='text-red-600'>Instructor Name is required</span>}
								</div>
								<div className="form-control w-full mx-4">
									<label className="label">
										<span className="label-text">Instructor Email</span>
									</label>
									<input type="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
									{errors.instructorEmail && <span className='text-red-600'>Instructor Email is required</span>}
								</div>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Total Seat</span>
								</label>
								<input type="number" {...register("totalSeat", { required: true })} className="input input-bordered" />
								{errors.seatStatus && <span className='text-red-600'>Available Seat is required</span>}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Course Fee</span>
								</label>
								<input type="number" {...register("courseFee", { required: true })} className="input input-bordered" />
								{errors.price && <span className='text-red-600'>Price is required</span>}
							</div>
							<div className="form-control mt-6">
								<CommonButton text={'Add Class'}></CommonButton>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddClasses;