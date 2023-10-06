"use client";

import {
  Box,
  Alert,
  Radio,
  Button,
  Container,
  TextField,
  FormLabel,
  Typography,
  RadioGroup,
  FormControl,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import TextList from "../TextList";
import DatePicker from "react-multi-date-picker";
import CLA from "../Loaders/CreatingAdLoader";
import { brDesc } from "@/utils/regexEnter";
import { e2p } from "@/utils/replaceNumber";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
const AdvertisingForm = ({
  PageTitle,
  adData,
  handleChange,
  setAdData,
  loading,
  handleSubmit,
  ButtonTitle,
  handleChangeDate,
}) => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Alert
          icon={false}
          sx={{
            borderRadius: "16px",
          }}
        >
          <Typography component={"h2"} variant="h5" color={"info"}>
            {PageTitle}
            {/* ثبت آگهی جدید یا ویرایش آگهی */}
          </Typography>
        </Alert>
      </Container>
      <Container
        sx={{
          mt: 10,
        }}
        maxWidth={"xs"}
      >
        <TextField
          label="عنوان آگهی"
          name="title"
          value={adData.title}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="توضیحات"
          name="description"
          value={brDesc(adData.description)}
          // باید بگم این کار بالا رو انجام بده اما دیسکریپشن اصلیو نشون بده
          onChange={handleChange}
          sx={{ mt: 2 }}
          fullWidth
          multiline
        />
        <TextField
          label="آدرس"
          name="location"
          value={adData.location}
          sx={{ mt: 2 }}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="شماره تماس"
          name="phone"
          value={adData.phone}
          sx={{ mt: 2 }}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="قیمت"
          sx={{ mt: 2 }}
          name="price"
          value={e2p(adData.price)}
          onChange={handleChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">تومان</InputAdornment>
            ),
          }}
        />

        <TextField
          label="بنگاه"
          name="realState"
          value={adData.realState}
          sx={{ mt: 2 }}
          onChange={handleChange}
          fullWidth
        />

        <FormControl sx={{ mt: 2 }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            دسته بندی
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              label="ویلا"
              id="villa"
              name="category"
              value="villa"
              control={<Radio />}
              onChange={handleChange}
              checked={adData.category === "villa"}
            />
            <FormControlLabel
              label="آپارتمان"
              id="apartment"
              name="category"
              value="apartment"
              control={<Radio />}
              onChange={handleChange}
              checked={adData.category === "apartment"}
            />
            <FormControlLabel
              label="مغازه"
              id="store"
              name="category"
              value="store"
              control={<Radio />}
              onChange={handleChange}
              checked={adData.category === "store"}
            />
            <FormControlLabel
              label="دفتر"
              id="office"
              name="category"
              value="office"
              control={<Radio />}
              onChange={handleChange}
              checked={adData.category === "office"}
            />
          </RadioGroup>
        </FormControl>

        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="flex-start"
          sx={{ mt: 2 }}
        >
          <Box sx={{ mt: 2 }} display={"flex"} flexDirection={"column"}>
            <TextList
              title={"امکانات رفاهی"}
              setState={setAdData}
              state={adData}
              type={"rules"}
            />
          </Box>
          <Box sx={{ mt: 2 }} display={"flex"} flexDirection={"column"}>
            <TextList
              title="قوانین"
              setState={setAdData}
              state={adData}
              type={"amenities"}
            />
          </Box>
        </Box>

        <FormControl>
          <FormLabel>سال ساخت</FormLabel>
          <DatePicker
            name="constructionDate"
            value={adData.constructionDate}
            onChange={handleChangeDate}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </FormControl>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          {loading ? (
            <Box mt={3}>
              <CLA visible={loading} />
            </Box>
          ) : (
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ my: 8 }}
            >
              {ButtonTitle}
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
};

export default AdvertisingForm;
