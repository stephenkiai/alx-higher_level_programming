#!/usr/bin/python3
"""Defines an empty class BaseGeometry."""

class BaseGeometry:
    """Representa class base geometry."""
     def area(self):
        """its not implemented."""
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """Validates parameter as integer.

        Args:
            name (str): Name of parameter.
            value (int): parameter to validate.
        Raises:
            TypeError: If value is not an integer.
            ValueError: If value is <= 0.
        """
        if type(value) != int:
            raise TypeError("{} must be an integer".format(name))
        if value <= 0:
            raise ValueError("{} must be greater than 0".format(name))
