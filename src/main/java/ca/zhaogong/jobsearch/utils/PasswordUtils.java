package ca.zhaogong.jobsearch.utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

public class PasswordUtils {
    public static String hashPassword(String plainPassword, String salt) {
        return md5Hash(plainPassword + salt);
    }

    private static String md5Hash(String input) {
        String md5 = null;
        if(null == input) return null;

        try {
            MessageDigest digest = MessageDigest.getInstance("MD5");
            digest.update(input.getBytes(), 0, input.length());
            md5 = new BigInteger(1, digest.digest()).toString(16);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return md5;
    }

    public static String generateSalt(){
        byte[] bytes = new byte[20];
        new Random().nextBytes(bytes);

        return new BigInteger(1, bytes).toString(16);
    }
}
