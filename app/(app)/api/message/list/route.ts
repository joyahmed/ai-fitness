import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const POST = async (req: Request) => {
	const { threadId } = await req.json();

	if (!threadId) {
		return NextResponse.json(
			{ error: 'Thread Id is required', success: false },
			{ status: 400 }
		);
	}

	const openai = new OpenAI();

	try {
		const messages = await openai.beta.threads.messages.list(
			threadId
		);

		return NextResponse.json(
			{ messages, success: true },
			{ status: 200 }
		);
	} catch (error: any) {
		console.log(error);
		return NextResponse.json(
			{ error: 'Something went wrong', success: false },
			{ status: 500 }
		);
	}
};
