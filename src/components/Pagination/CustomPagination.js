import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/";

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CustomPagination = ({ setpage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setpage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={Theme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
