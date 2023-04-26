import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import UploadButton from '../../../components/Preview/UploadBtn';
import ImagePreview from '../../../components/Preview/ImagePreview';
import { getDetailsProduct, updateProduct } from "../../../api/api";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useParams } from "react-router-dom";
import AdminPath from "../../../routes/AdminPath";

export default function EditProduct(props) {
  const history = useHistory();
  const productID = useParams().productID;
  const [product, setProduct] = useState();
  const [imageProduct, setImageProduct] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState('');
  const [sale, setSale] = useState(false);
  const [name, setName] = useState('');


  useEffect(async () => {
    props.handleLoading(true);
    await getDetailsProduct(productID).then((res) => {
        console.log(res)
      setProduct(res.data);
      setCode(res.data.code);
      setDescription(res.data.description);
      setName(res.data.name);
      setPrice(res.data.price);
      setSale(res.data.sale);
      setSize(res.data.size);
      setImageProduct(res.data.image);
    
    });
    props.handleLoading(false);
  }, [productID]);




  const handleSubmit = async () => {
    const data = {
      productID: productID,
      code: code,
      name: name,
      price: price,
      image: imageProduct,
      description: description,
      sale: sale,
      size: size,
    };
    console.log(data);
    if (
      data.code == '' ||
      data.name == '' ||
      data.price == '' ||
      data.description == '' ||
      data.size == ''
    ) {
      alert('Xin vui lòng điền đầy đủ thông tin!');
    } else {
      props.handleLoading(true);
      await updateProduct(data).then((res) => {
        history.push(AdminPath.PRODUCT)
      });
    }
  };


  const addImage = (event) => {
    if (event.target.type === "file") {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImageProduct((imageProduct) => [
            ...imageProduct,
            { url: reader.result, image: file, type: file.type },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const deleteImage = (url) => {
    const newImagePreview = imageProduct.filter((e) => {
      return e.url != url.url;
    });
    setImageProduct(newImagePreview);
  };

  const listImagePreview = imageProduct.map((e, index) => {
    console.log(e);
    if (e.type !== "video/mp4") {
      return (
        <ImagePreview url={e} key={index} deleteImage={deleteImage} />
      );
    }
  });


  const handleChangeInput = (event) => {
    if (event.target.name === 'name') {
    //   setName(event.target.value);
    } else if (event.target.name === 'code') {
      setCode(event.target.value);
    } else if (event.target.name === 'price') {
      setPrice(event.target.value);
    } else if (event.target.name === 'size') {
      setSize(event.target.value);
    } else if (event.target.name === 'description') {
      setDescription(event.target.value);
    }
  };

  return (
    <div className="wrap-content-admin">
      <div className="content-admin-title">
        <div>
          <span>Update Product:</span>
        </div>
      </div>
      <hr />
      <div>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12}>
            <TextField
              id="outlined-basic"
              label="Product name"
              variant="outlined"
              name="name"
              style={{ width: '100%' }}
              onChange={handleChangeInput}
              defaultValue={product?.name}
              key={product?.name}
            />
          </Grid>
          <Grid item lg={4} md={4}>
            <TextField
              id="outlined-basic"
              label="Product Code"
              name="code"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={handleChangeInput}
              defaultValue={product?.code}
              key={product?.code}
            />
          </Grid>
          <Grid item lg={4} md={4}>
            <TextField
              id="outlined-basic"
              label="Product price"
              name="price"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={handleChangeInput}
              type="number"
              defaultValue={product?.price}
              key={product?.price}
            />
          </Grid>
          <Grid item lg={4} md={4}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Size
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //   value={age}
                onChange={handleChangeInput}
                name="size"
                label="Size"
                defaultValue={product?.size}
                key={product?.size}
              >
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={12} md={12}>
            <hr />

            <div className="news-editor mt-3">
              <p style={{ fontWeight: '500' }}>Product Image:</p>

              <div className="wrap-pick-image">
                <div className="wrapper">
                  {listImagePreview}
                  <UploadButton addImage={addImage} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={12} md={12}>
            <hr />

            <div className="news-editor mt-3">
              <p style={{ fontWeight: '500' }}> Description: </p>
            </div>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              placeholder="Minimum 3 rows"
              style={{ width: '100%' }}
              name="description"
              onChange={handleChangeInput}
              defaultValue={product?.description}
              key={product?.description}
            />
          </Grid>
        </Grid>
        <div className="news-editor mt-3">
          <p style={{ fontWeight: '500' }}>Status</p>

          <FormControlLabel
            value="url"
            control={<Radio color="primary" />}
            label="Sale"
            checked={sale}
            // onClick={handleClickHighlight}
          />
        </div>
        <div className="">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            style={{ float: 'right' }}
            onClick={handleSubmit}
            className="mb-4"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
