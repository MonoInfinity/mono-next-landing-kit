import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as joi from 'joi';
import { ValidationError } from 'joi';
import axios from 'axios';

const validatorFormat = {
    'error.user-is-not-in-room': 'you is not in this room',
    'error.invalid-position': 'position is invalid',
    'error.is-not-your-piece': 'this piece is not your piece',
    'error.piece-is-empty': 'current position is empty',
    'error.invalid-password-username': 'username or password is not correct',
    'error.request-many-time': 'you have requested too many times, please try again after {{time}} minutes',
    'error.user-banned': 'you is blocked by an administrator',
    'error.not-allow-action': 'you is not allow to do this action',
    'error.some-wrong': 'something went wrong, please try again later',
    'error.invalid-input': 'your request body is wrong',
    'error.method-undefined': 'this method is not supported',
    'error.already-join': 'you has joined this room',
    'error.full-player': 'this room is full player',
    'error.is-playing': 'this room is playing',
    'error.not-playing': 'this room is not playing',
    'error.wait-more-player': 'please wait for more player',
    'error.wait-ready-player': 'please wait for another player is ready',
    'error.already-play-other': 'you are playing another game',
    'error.wrong-turn': 'this is not your turn',
    'error.cell-picked': 'please choose other boxes',
    'message.update-success': 'your account has been successfully updated',
    'message.thank-you-feedback': 'Thank For Your Message',
    'message.send-email': 'an email has been sent to your email',
    'message.send-phone-otp': 'an OTP has been sent to your phone number',
    'field.field-taken': 'is taken',
    'field.not-found': 'is not found',
    'field.not-correct': 'is not correct',
    'field.file-too-big': "couldn't be uploaded. Photos should be smaller than #{size} MB",
    'field.file-wrong-extension': "couldn't be uploaded. Photos should be saved as JPEG, JPG, PNG, BMP files",
    'string.base': 'should be a string',
    'string.min': 'should contain at least {#limit} characters',
    'string.max': 'should contain less than or equal {#limit} characters',
    'string.alphanum': 'should contain letters and numbers',
    'string.email': 'should be a valid email',
    'string.pattern.base': 'should follow pattern',
    'string.empty': 'should not be empty',
    'number.base': 'should be a number',
    'number.min': 'should be greater than or equal {#limit}',
    'number.max': 'should be less than or equal {#limit}',
    'any.required': 'is required',
    'any.only': 'should be match',
    'boolean.base': 'should be a boolean',
    'array.length': 'should be length equal',
    'object.unknown': 'object.unknown',

    'any.custom': 'any.custom',
};
interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export const contactFormValidator = joi.object({
    name: joi.string().min(5).max(50).required().messages(validatorFormat),
    email: joi
        .string()
        .min(5)
        .max(250)
        .email({ tlds: { allow: false } })
        .required()
        .messages(validatorFormat),
    message: joi.string().min(5).max(3000).required().messages(validatorFormat),
});

const defaultValues: ContactForm = {
    email: '',
    message: '',
    name: '',
    phone: '',
};
export interface ContactProps {}

const parseMessage = (joiMessage: ValidationError) => {
    let result = {} as any;
    if (joiMessage.details.length) {
        joiMessage.details.forEach((error: any) => {
            result[`${error.path[0]}`] = error.message;
        });
    }
    return result;
};

export const Contact: React.FunctionComponent<ContactProps> = () => {
    const { register, handleSubmit, reset } = useForm<ContactForm>({ defaultValues });
    const [errors, setErrors] = React.useState<ContactForm>({ ...defaultValues });
    const [message, setMessage] = React.useState<string>('');

    const handleOnSubmit = (data: ContactForm) => {
        setErrors({ ...defaultValues });
        setMessage('');

        const { error, value } = contactFormValidator.validate(data, { abortEarly: false });
        if (error) {
            setErrors({ ...parseMessage(error) });
            return;
        }
        const results = value as ContactForm;

        axios
            .get(
                `https://api.telegram.org/bot1922841476:AAHHkpNqcANlO252GcthXKF-qXhlE2EL2yY/sendMessage?chat_id=-712616515&text=${results.email} - ${results.name} - ${results.message}`
            )
            .then(() => {
                setMessage('Thank you for your contact');
                reset({ ...defaultValues });
            });
    };

    return (
        <div
            className={`absolute z-30  max-w-[450px] px-4 lg:px-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transform duration-1000 ${`opacity-100 scale-100`}`}
        >
            <div className="mx-auto rounded-md bg-opacity-70 bg-gradient-to-bl from-purple-600 via-sky-600">
                <form
                    onSubmit={handleSubmit(handleOnSubmit)}
                    className="px-2 py-8 space-y-4 transform bg-white rounded-md lg:py-16 md:px-8 md:-translate-x-4 md:translate-y-4 bg-opacity-80 md:w-contact"
                >
                    <div className="mb-8 space-y-2">
                        <h1 className="text-4xl font-semibold text-center text-gray-900">Get In Touch</h1>
                        <p className="text-center text-gray-500 ">Thank For Your Message.</p>
                    </div>
                    {Boolean(message) && <p className="text-green-600 fade-in">{message}</p>}
                    <div className="space-y-1">
                        <label className="block font-medium text-gray-800">Full Name</label>
                        <input
                            className="block w-full outline-none rounded-sm bg-tuna py-2 px-1.5 border border-gray-600 border-opacity-70"
                            {...register('name')}
                            placeholder=""
                        />
                        {Boolean(errors.name) && <p className="text-red-500 fade-in">Full Name {errors.name}</p>}
                    </div>
                    <div className="space-y-1">
                        <label className="block font-medium text-gray-800">Email</label>
                        <input
                            type="email"
                            className="block w-full outline-none rounded-sm bg-tuna py-2 px-1.5 border border-gray-600 border-opacity-70"
                            {...register('email')}
                        />
                        {Boolean(errors.email) && <p className="text-red-500 fade-in">Email {errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                        <label className="block font-medium text-gray-800">Your Message</label>
                        <textarea
                            className="block w-full outline-none rounded-sm bg-tuna py-2 px-1.5  text-mercury border border-gray-600 border-opacity-70"
                            placeholder="Message..."
                            {...register('message')}
                        ></textarea>
                        {Boolean(errors.message) && <p className="text-red-500 fade-in">Message {errors.message}</p>}
                    </div>
                    <div>
                        <button className="inline-block px-6 py-2 font-semibold text-white duration-300 rounded-md bg-sky-600 hover:bg-sky-500 focus:outline-none">
                            Submit Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
