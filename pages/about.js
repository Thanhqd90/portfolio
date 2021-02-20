import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MLink from "../src/MLink";

export default function About() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v5-alpha example
          </Typography>
          <Button variant="contained" component={MLink} noLinkStyle href="/">
            Go to the main page
          </Button>
        </Box>
      </Container>
    </div>
  );
}
