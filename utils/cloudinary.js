// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });

const { cloudinary } = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      // upload the file on cloudinary
      const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      //   file has been uploaded successfully
      console.log(`File is uploaded on Cloudinary : ${uploadResponse.url}`);
      return uploadResponse;
    }
  } catch (error) {
    // remove the locally saved temporary file as the upload operation
    fs.unlinkSync(localFilePath);
  }
};
