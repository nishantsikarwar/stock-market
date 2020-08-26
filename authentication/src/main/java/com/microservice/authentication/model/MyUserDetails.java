//package com.microservice.authentication.model;
//
//import java.util.Arrays;
//import java.util.Collection;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//public class MyUserDetails implements UserDetails {
//
//	private String userName;
//	private String emailId;
//	private String password;
//	private boolean active;
//	private String role;
//
//	public MyUserDetails() {
//	}
//
//	public MyUserDetails(User user) {
//		super();
//		this.userName = user.getUserName();
//		this.password = user.getPassword();
//		this.emailId = user.getEmailId();
//		this.active = user.isActive();
//		this.role = user.getRoles();
//
//	}
//
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return Arrays.asList(new SimpleGrantedAuthority(this.role));
//	}
//
//	@Override
//	public String getPassword() {
//		// TODO Auto-generated method stub
//		return this.password;
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return this.userName;
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isEnabled() {
//		// TODO Auto-generated method stub
//		return this.active;
//	}
//
//}
