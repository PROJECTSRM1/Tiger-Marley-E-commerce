
import { FaThLarge, FaTh } from "react-icons/fa";


function ViewToggle({ viewMode, setViewMode }) {
return (
<div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
<FaThLarge
size={20}
color={viewMode === "grid" ? "black" : "gray"}
onClick={() => setViewMode("grid")}
/>
<FaTh
size={20}
color={viewMode === "compact" ? "black" : "gray"}
onClick={() => setViewMode("compact")}
/>
</div>
);
}


export default ViewToggle;

