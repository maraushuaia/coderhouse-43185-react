import { AccountCircle } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Login = ({ color }) => {
  return (
    <div>
      <Badge color="info">
        <AccountCircle sx={{ pb: 0 }} color={color} />
      </Badge>
    </div>
  );
};

export default Login;
