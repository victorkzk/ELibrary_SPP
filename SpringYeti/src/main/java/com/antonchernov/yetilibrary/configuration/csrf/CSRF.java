package com.antonchernov.yetilibrary.configuration.csrf;

import org.springframework.stereotype.Component;


public class CSRF {
	/**
	 * The name of the cookie with the CSRF token sent by the rest as a response.
	 */
	public static final String RESPONSE_COOKIE_NAME = "CSRF-TOKEN";
	/**
	 * The name of the header carrying the CSRF token, expected in CSRF-protected requests to the rest.
	 */
	public static final String REQUEST_HEADER_NAME = "X-CSRF-TOKEN";
}
