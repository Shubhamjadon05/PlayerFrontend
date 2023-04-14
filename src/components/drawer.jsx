import {
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Divider,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComp = () => {
	const [openDrawer, setOpenDrawer] = useState();
	const Pages = [
		"Home",
		"Player Registration",
		"Sport Center Registration",
		"Players",
		"Sport Centers",
	];
	return (
		<>
			<Drawer
				open={openDrawer}
				onClose={() => {
					setOpenDrawer(false);
				}}
			>
				<List>
					<ListItemButton
						key={5}
						onClick={() => {
							setOpenDrawer(false);
						}}
					>
						<ListItemIcon>
							<ListItemText>Substitute Player</ListItemText>
						</ListItemIcon>
					</ListItemButton>
					<Divider variant="middle" light={false} />

					{Pages.map((page, index) => {
						return (
							<ListItemButton
								key={index}
								onClick={() => {
									setOpenDrawer(false);
								}}
							>
								<ListItemIcon>
									<ListItemText>{page}</ListItemText>
								</ListItemIcon>
							</ListItemButton>
						);
					})}
				</List>
			</Drawer>
			<MenuIcon
				onClick={() => {
					setOpenDrawer(!openDrawer);
				}}
				sx={{ marginLeft: "1rem" }}
			/>
		</>
	);
};

export default DrawerComp;
