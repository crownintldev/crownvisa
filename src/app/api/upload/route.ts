// @ts-nocheck
import { writeFile, access } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const fileBase64 = body.file;
  const filename = body.filename;

  if (!fileBase64 || !filename) {
    return NextResponse.json({ message: 'File data or filename is missing', success: false });
  }

  const path = `./public/images/${filename}`;

  try {
    // Check if the file already exists
    await access(path);
    // If no error is thrown, the file exists
    return NextResponse.json({
      message: 'file already exists',
      success: false,
    });
  } catch {
    // If an error is thrown, the file does not exist, proceed with saving
    const buffer = Buffer.from(fileBase64, 'base64');
    await writeFile(path, buffer);
    const publicPath = path.replace('./public', '');
    return NextResponse.json({
      message: 'file uploaded',
      path: publicPath,
      success: true,
    });
  }
}
