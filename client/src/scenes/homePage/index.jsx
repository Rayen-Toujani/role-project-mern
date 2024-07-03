import { Box, useMediaQuery, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
// import UserWidget from "scenes/widgets/UserWidget";
// import MyPostWidget from "scenes/widgets/MyPostWidget";
// import PostsWidget from "scenes/widgets/PostsWidget";
// import AdvertWidget from "scenes/widgets/AdvertWidget";
// import FriendListWidget from "scenes/widgets/FriendListWidget";

const HomePage = () => {
  // const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ color: '#333', marginBottom: 2 }}>
            Menu:
          </Typography>
          <Typography variant="h2" sx={{ color: '#555', marginBottom: 1 }}>
            Item 1
          </Typography>
          <Typography variant="h2" sx={{ color: '#555', marginBottom: 1 }}>
            Item 2
          </Typography>
          <Typography variant="h2" sx={{ color: '#555', marginBottom: 1 }}>
            Item 3
          </Typography>
          <Typography variant="h2" sx={{ color: '#555', marginBottom: 1 }}>
            Item 4
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
