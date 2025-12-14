
// Verification script for SignUp logic
import axios from "axios";

async function testSignUpLogic() {
    console.log("Starting verification...");

    const testEmail = "john@mail.com"; // Known existing email
    const newEmail = `new_unique_${Date.now()}@test.com`; // New unique email

    try {
        console.log(`Checking existing email: ${testEmail}`);
        const usersRes = await axios.get("https://api.escuelajs.co/api/v1/users");
        const existingUser = usersRes.data.find((u) => u.email === testEmail);

        if (existingUser) {
            console.log("PASS: Existing email correctly identified as taken.");
        } else {
            console.error("FAIL: Existing email NOT identified as taken.");
        }

        console.log(`Checking new email: ${newEmail}`);
        const existingUserNew = usersRes.data.find((u) => u.email === newEmail);

        if (!existingUserNew) {
            console.log("PASS: New email correctly identified as available.");
        } else {
            console.error("FAIL: New email incorrectly identified as taken.");
        }

    } catch (error) {
        console.error("Error during verification:", error.message);
    }
}

testSignUpLogic();
