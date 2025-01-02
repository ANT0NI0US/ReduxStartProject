export const MIN_INPUT_LENGTH = 3;
export const MAX_INPUT_LENGTH = 50;
export const MAX_CODE_LENGTH = 10;
export const TEXT_INPUT_REGEX = /^(?!\d+$)[A-Za-z\u0600-\u06FF *&%]+$/;

export const NUMBER_INPUT_REGEX = /^[0-9]+$/;
export const PHONE_NUMBER_REGEX = /^5\d{0,9}$/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PAGE_SIZE = 10;

export const ARABIC_REGEX = /^[\u0621-\u064A\u0660-\u0669 ]+$/;
export const ENGLISH_REGEX = /^[a-zA-Z\s]+$/;
export const EGYPTIAN_PHONE_NUMBER_REGEX = /^01[0125][0-9]{8}$/;

export const MAX_TEXTAREA_LENGTH = 100;

export const TEXT_INPUT_REGEX_WITH_NUMBERS =
  /^[A-Za-z\u0600-\u06FF\u0660-\u06690-9 ]+$/;
