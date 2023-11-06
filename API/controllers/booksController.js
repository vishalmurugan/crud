/** This file contains the functions about the books CRUD operations */

const Book= require('./../modals/books');
const yup= require('yup'); //Yup is used for API request validation

module.exports={
	
	/** This function is used to create or add new book 
	 * @req.body - In body pass the book title, author,description,year,isbn
	*/
	createBook:async function(req,res){
		var reqData= req.body;
        
		//Validation schema
		var schema= yup.object({
			title:yup.string().required(),
			author:yup.string().required(),
			description:yup.string().required(),
			year:yup.string().required(),
			isbn:yup.string().required().matches(
				'^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$',
				"Invalid ISBN"
			  )
		});
        
		//Output response
		const sendResponse= async()=>{
			try{

                await Book.create(reqData).then();
				return res.status(200).json({message:'Book created successfully'});

			}catch(error){
				return res.status(500).json({error:error}); // Database error response
			}
		}
       
		//This is used to validate the request
		await schema.validate(reqData,{abortEarly:false}).then(()=>{
				sendResponse();//If validation success , this fuction is call
		}).catch(error=>{
			return res.status(400).json({error:error}); //Error response
		})


	},

	/** This function is used to update book 
	 * @req.body - In body pass the book title, author,description,year,isbn
	*/
	updateBook:async function(req,res){
		var reqData= req.body;
        
		//Validation schema
		var schema= yup.object({
			title:yup.string().required(),
			author:yup.string().required(),
			description:yup.string().required(),
			year:yup.string().required(),
			isbn:yup.string().required().matches(
				'^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$',
				"Invalid ISBN"
			  )
		});
        
		//Output response
		const sendResponse= async()=>{
			try{
				
				var count = await Book.count({where:{isbn:reqData.isbn}}).then();
				if(count > 0){
					await Book.update(reqData,{where:{isbn:reqData.isbn}}).then();
				return res.status(200).json({message:'Book updated successfully'});
				}else{
					return res.status(404).json({message:'No Book Found'});
				}

			}catch(error){
				return res.status(500).json({error:error}); // Database error response
			}
		}
       
		//This is used to validate the request
		await schema.validate(reqData,{abortEarly:false}).then(()=>{
				sendResponse();//If validation success , this fuction is call
		}).catch(error=>{
			return res.status(400).json({error:error}); //Error response
		});
	},

	/** This function is used to get all book details 
	*/
	getBooks:async function(req,res){
		
			try{
                var list = await Book.findAll().then();
				return res.status(200).json({message:'Book retrieved successfully',items:list}); //success response

			}catch(error){
				return res.status(500).json({error:error}); // Database error response
			}
	},

	/** This function is used to delete book
	 * @req.params - In params pass the isbn number
	*/
	deleteBook:async function(req,res){
		var {isbn}= req.params;
        
		//Validation schema
		var schema= yup.object({
			isbn:yup.string().required().matches(
				'^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$',
				"Invalid ISBN"
			  )
		});
        
		//Output response
		const sendResponse= async()=>{
			try{
				var count = await Book.count({where:{isbn:isbn}}).then();
				if(count > 0){
					await Book.destroy({where:{isbn:isbn}}).then();
					return res.status(200).json({message:'Book deleted successfully'});
				}else{
					return res.status(404).json({message:'No Book Found'});
				}

			}catch(error){
				return res.status(500).json({error:error}); // Database error response
			}
		}
       
		//This is used to validate the request
		await schema.validate(req.params,{abortEarly:true}).then(()=>{
				sendResponse();//If validation success , this fuction is call
		}).catch(error=>{
			return res.status(400).json({error:error}); //Error response
		});
	},
       
   /** This function is used to view book
	 * @req.params - In params pass the isbn number
	*/
	viewBook:async function(req,res){
		var {isbn}= req.params;
        
		//Validation schema
		var schema= yup.object({
			isbn:yup.string().required().matches(
				'^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$',
				"Invalid ISBN"
			  )
		});
        
		//Output response
		const sendResponse= async()=>{
			try{

                var list =await Book.findAll({where:{isbn:isbn}}).then();
				if(list.length > 0){
				return res.status(200).json({message:'Book retrieved successfully',items:list[0]}); //success response
				}else{
					return res.status(404).json({message:'No Book found'});
				}
			}catch(error){
				return res.status(500).json({error:error}); // Database error response
			}
		}
       
		//This is used to validate the request
		await schema.validate(req.params,{abortEarly:true}).then(()=>{
				sendResponse();//If validation success , this fuction is call
		}).catch(error=>{
			return res.status(400).json({error:error}); //Error response
		});
	},
	
}