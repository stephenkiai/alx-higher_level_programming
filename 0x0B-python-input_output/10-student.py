#!/usr/bin/python3
"""Defines class Student."""

class Student:
    """Represent a student."""

    def __init__(self, first_name, last_name, age):
        """Initialize a new Student.

        Args:
            first_name (str): First name of student.
            last_name (str): last name of student.
            age (int): Age of student.
        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """Get a dictionary of Student.

        If attrs is a list of strings, represents only those attributes
        included in the list.Otherwise, all attributes must be retrieved

        Args:
            attrs (list): (Optional) Attributes to represent.
        """
        if (type(attrs) == list and
                all(type(ele) == str for ele in attrs)):
            return {k: getattr(self, k) for k in attrs if hasattr(self, k)}
        return self.__dict__
