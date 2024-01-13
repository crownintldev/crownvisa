//@ts-nocheck
import { writeFile, access } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.formData();
    const file = data.get('file');
    if (!file) {
        return NextResponse.json({ "message": "no image found", success: false });
    }

    const path = `./public/images/${file.name}`;

    try {
        // Check if the file already exists
        await access(path);
        // If no error is thrown, the file exists
        return NextResponse.json({ "message": "file already exists", success: false });
    } catch {
        // If an error is thrown, the file does not exist, proceed with saving
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        await writeFile(path, buffer);
        return NextResponse.json({ "message": "file uploaded", "path": path, success: true });
    }
}
