import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import UploadButton from '../../../components/Preview/UploadBtn';
import ImagePreview from '../../../components/Preview/ImagePreview';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { addProduct } from '../../../api/api';
import AdminPath from '../../../routes/AdminPath';
export default function AddProduct(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const categoryID = search.id;
  const [subCategory, setSubCategory] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState();
  const [defaultSelect, setDefaultSelect] = useState();
  const [imagePreview, setImagePreview] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const [count, setCount] = useState(1);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState([]);
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [sale, setSale] = useState(false);

  const [subCategorySelect, setSubCategorySelect] = useState('');

  const [type, setType] = useState('');

  useEffect(async () => {}, [categoryID]);

  const handleChangeCategory = (value) => {
    if (value !== '') {
      setSubCategorySelect(value._id);
    } else {
      setSubCategorySelect('');
    }
  };

  const handleChangeInput = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
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

  const handleSubmit = async () => {
    const data = {
      categoryID: categoryID,
      code: code,
      name: name,
      price: price,
      image: imagePreview,
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
      await addProduct(data).then((res) => {
        history.push(AdminPath.PRODUCT)
      });
    }
  };

  const handleClickHighlight = () => {
    setSale(!sale);
  };
  const handlePastedText = (text, html, callback) => {
    const modifiedHtml = html.replace(
      /<p class=MsoListParagraph[\s\S]*?>·([\s\S]*?)<\/p>/g,
      '<li>$1</li>'
    );
  };

  const addImage = (event) => {
    if (event.target.type === 'file') {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview((imagePreview) => [
            ...imagePreview,
            { url: reader.result, image: file, type: file.type },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const deleteImage = (url) => {
    const newImagePreview = imagePreview.filter((e) => {
      return e.url != url.url;
    });
    setImagePreview(newImagePreview);
  };

  const listImagePreview = imagePreview.map((e, index) => {
    return <ImagePreview url={e} key={index} deleteImage={deleteImage} />;
  });

  const handleChangeImage = (data) => {
    setImage((image) => [...image, data]);
  };
  const handleDeleteImage = (name) => {
    const newArrImage = image.filter((e) => {
      return e.image.name != name;
    });
    setImage(newArrImage);
  };
  const handleChangeContent = (data, index) => {
    let items = [...content];
    let item = { ...content[index] };
    item = data;
    items[index] = item;
    setContent(items);
  };
  const handleClickCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="wrap-content-admin">
      <div className="content-admin-title">
        <div>
          <span>Create Product:</span>
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
            onClick={handleClickHighlight}
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
