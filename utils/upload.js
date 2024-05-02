const multer = require('multer');
const storage = multer.diskStorage({
	destination:function(req,file,callback) {
		callback(null,'app/public/uploads/');
	},
	filename:function(req,file,callback){
		callback(null,file.originalname);
	}
});

const upload = multer({storage});

module.exports = upload;